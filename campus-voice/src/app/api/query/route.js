import { NextResponse } from "next/server";
import prisma from "../prisma_client";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

export const POST = async (req, res) => {
    try {
        const request = await req.json();
        const { sender_id, receiver_id, issue_id, query_title, query_desc, query_type, identity, images } = request;

        //if any of the required fields are missing
        if (!sender_id || !receiver_id || !issue_id || !query_title || !query_desc || !query_type || identity === undefined) {
            return NextResponse.json({ error: "Bad Request" }, { status: 400 });
        }

        //insert query into the database as well as images

        const query = {
            sender_id,
            receiver_id,
            issue_id,
            query_title,
            query_desc,
            query_type,
            identity,
            query_status: "sent",
            createdAt: new Date()
        }

        const res = await prisma.Queries.create({
            data: query
        });

        if (!res) {
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }

        //insert images
        if (images) {
            for (let i = 0; i < images.length; i++) {
                const image = {
                    query_id: res.query_id,
                    image: images[i]
                }
                const imageRes = await prisma.QueryImages.create({
                    data: image
                });
                if (!imageRes) {
                    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
                }
            }
        }

        return NextResponse.json({ query }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error", errorMsg: err.message }, { status: 401 });
    }
}


//get all queries
export const GET = async (req, res) => {
    try {
        const noOfQueries = parseInt(req.nextUrl.searchParams.get('noOfQueries') || 5);
        const lastQueryId = parseInt(req.nextUrl.searchParams.get('lastQueryId') || 0);
        const session = await getServerSession({ req });
        const cookieStore = await cookies(req);
        if (!session || !cookieStore.get('uid') || !cookieStore.get('role')) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const queries = await prisma.Queries.findMany({
            take: noOfQueries,
            skip: lastQueryId,
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                query_id: true,
                sender_id: true,
                receiver_id: true,
                issue_id: true,
                query_title: true,
                query_desc: true,
                query_type: true,
                identity: true,
                createdAt: true,
                query_status: true,
                queryImages: {
                    select: {
                        image: true
                    }
                }
            }
        });

        if (!queries) {
            return NextResponse.json({ error: "No queries found" }, { status: 404 });
        }

        return NextResponse.json({ queries }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error", errorMsg: err.message }, { status: 401 });
    }
}
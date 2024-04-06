import { cookies } from "next/headers";
import prisma from "../../prisma_client";

const { getServerSession } = require("next-auth");
const { NextResponse } = require("next/server");

export const GET = async(req,res) =>{
    try{
        const session = await getServerSession({req});
        const cookieStore = await cookies(req);
        if(!session || !cookieStore.get('uid') || !cookieStore.get('role')){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const { searchParams } = new URL(req.url);
        const issue_id = searchParams.get('issue_id');

        if(!issue_id){
            return NextResponse.json({error: "Invalid issue id"}, {status: 400});
        }

        const resolvers = await prisma.IssueMapping.findMany({
            where:{
                issue_id : issue_id
            },
            select:{
                resolver_id : true,
                master_id : true,
                resolver : {
                    select : {
                        resolver_role : true,
                        user : {
                            select : {
                                createdAt : true,
                                userInfo : true
                            }
                        }
                    }
                }
            }
        });

        if(!resolvers){
            return NextResponse.json({error: "No resolvers found"}, {status: 404});
        }

        return NextResponse.json({resolvers},{status:200});
    }catch(err){
        return NextResponse.json({error: "Internal Server Error",errorMsg : err.message}, {status: 401});
    }
}
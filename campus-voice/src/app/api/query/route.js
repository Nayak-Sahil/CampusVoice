import { NextResponse } from "next/server";
import prisma from "../prisma_client";

export const POST = async(req,res) =>{
    try{
        const request = await req.json();
        const {sender_id,receiver_id,issue_id,query_title,query_desc,query_type,identity,images} = request;

        console.log(request);

        //if any of the required fields are missing
        if(!sender_id || !receiver_id || !issue_id || !query_title || !query_desc || !query_type || identity === undefined){
            return NextResponse.json({error: "Bad Request"}, {status: 400});
        }

        //insert query into the database as well as images
        
        const query = {
            sender_id,
            receiver_id,
            issue_id,
            query_title,
            query_desc,
            query_type,
            identity
        }

        const res = await prisma.Queries.create({
            data: query
        });

        if(!res){
            return NextResponse.json({error: "Internal Server Error"}, {status: 500});
        }

        //insert images
        console.log(res)
        if(images){
            for(let i=0; i<images.length; i++){
                const image = {
                    query_id: res.query_id,
                    image_url: images[i]
                }
                const imageRes = await prisma.QueryImages.create({
                    data: image
                });
                if(!imageRes){
                    return NextResponse.json({error: "Internal Server Error"}, {status: 500});
                }
            }
        }

        return NextResponse.json({query},{status:200});
    }catch(err){
        return NextResponse.json({error: "Internal Server Error",errorMsg : err.message}, {status: 401});
    }
}
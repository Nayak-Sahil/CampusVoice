import { getServerSession, unstable_getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { cookies, headers } from "next/headers";
import prisma from "../../prisma_client";


export const GET = async(req,res) =>{
    try{
        //get session token
        const session = await getServerSession({req});
        const cookieStore = await cookies(req);

        //if token is not present or expired
        if(!session || !cookieStore.get('uid') || !cookieStore.get('role')){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        //get search query
        const { searchParams } = new URL(req.url)
        const category = searchParams.get('category');

        //if category is domains
        if(category === "domains"){
            const domains = await prisma.Domain.findMany({
                where:{
                    OR: [
                        {
                            domain_id : parseInt(cookieStore.get('uid').value.substring(1,3))   
                        },
                        {
                            domain_id : {
                                gt : 54
                            }
                        }
                    ]
                }
            });
            return NextResponse.json(domains,{status:200});
        }

        if(category === "subdomains"){
            const domainId = parseInt(searchParams.get('domain_id'));
            if(domainId === 0) return NextResponse.json({msg:"Invalid domain id"},{status:400});
            const subdomains = await prisma.Subdomain.findMany({
                where:{
                    domain_id : domainId
                },
                include : {
                    issues : true
                }
            });
            return NextResponse.json(subdomains,{status:200});
        }

        if(category === "issues"){
            const subdomainId = parseInt(searchParams.get('subdomain_id'));
            if(subdomainId === 0) return NextResponse.json({msg:"Invalid subdomain id"},{status:400});
            const issues = await prisma.IssueType.findMany({
                where:{
                    subdomain_id : subdomainId
                }
            });
            return NextResponse.json(issues,{status:200});
        }

        //if category is not domains, subdomains or issues
        return NextResponse.json({msg:"Invalid category"},{status:400});
    }catch(err){
        return NextResponse.json({msg:err.message},{status:500,statusText:err.message});
    }
}
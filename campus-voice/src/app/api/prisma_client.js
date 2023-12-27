import { PrismaClient } from '@prisma/client'

export function PrismaClientSend(){
    try{
        const prisma = new PrismaClient()
        return prisma;
    }catch(e){
        throw Error("Unable to connect to prisma client");
    }
}
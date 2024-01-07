import CryptoJS from "crypto-js";
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"
import { PrismaClientSend } from "../../prisma_client";

export const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                uid: { label: "uid", type: "text" },
                password: { label: "password", type: "text" }
            },
            async authorize(credentials, req) {
                try {
                    let uidtype; //0 if uid is number , else 1 for email
                    let user; // to save user data collected from database
                    const prisma_client = PrismaClientSend(); // including prisma client
                    if (!req.body.callbackUrl.includes("Student")) {
                        uidtype = 1;
                    } else {
                        uidtype = 0;
                    }

                    const emailRegEx = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})+$/);
                    const numericUidRegEx = new RegExp(/^[0-9]{8}$/);
                    if (uidtype === 1 && emailRegEx.test(credentials.uid)) {
                        user = await prisma_client.user_info.findUnique({
                            where:{
                                email:credentials.uid
                            },
                            include:{
                                user:true
                            },
                        });
                        user = user.user;
                        
                    } else if ((uidtype ===  1 || uidtype === 0 )&& numericUidRegEx.test(credentials.uid)) {
                        user = await prisma_client.user_auth.findUnique({
                            where:{uid:credentials.uid},
                            include:{
                                userInfo:true
                            }
                        });
                    } else {
                        throw new Error("Please provide valid uid!")
                    }

                    const hashpass = CryptoJS.SHA256(credentials.password+process.env.NEXTAUTH_PASSSECRET).toString(CryptoJS.enc.Hex);
                    // console.log(CryptoJS.SHA256("arjlafd"+process.env.NEXTAUTH_PASSSECRET).toString(CryptoJS.enc.Hex) == hashPass);
                    // console.log(hashPass)
                    if(!user){
                        throw new Error("User not found!");
                    }
                    if(user && user.password === hashpass){
                        prisma_client.$disconnect();
                        let role;
                        if(user.uid.charAt(0) === '0'){
                            role = "student";
                        }else{
                            role = "resolver";
                        
                        }
                        return {
                            uid:user.uid,
                            role:role,
                            // image:user.userInfo.image
                        }
                    }
                    
                    throw new Error("Invalid user!");
                } catch (error) {
                    throw error
                }
            }
        })
    ],
    pages: {
        signIn: '/Account'
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true
    },
    callbacks: {
        async session({ session, user, token }) {
            if (token) {
                session.user.uid = token.uid;
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user, session }) {
            if (user) {
                token.uid = user.uid;
                token.role = user.role;
                token.name = token.name;
                token.email = token.email;
            }
            return token;
        },
        async signIn({ account, profile, user }) {
            if (account.provider === "credentials" && user) {
                user.name = user.uid;
                user.email = user.email
                user.image = user.image
                return true
            }
            return false;
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }













//code for creating user

                    // const hashPass = CryptoJS.SHA256("random1234"+process.env.NEXTAUTH_PASSSECRET).toString(CryptoJS.enc.Hex);
                    // const prisma = PrismaClientSend();

                    // const user = await prisma.user_auth.create({
                    //     data : {
                    //         uid : "01623002",
                    //         password : hashPass,
                    //         modifyAt:new Date().toISOString(),
                    //         createdAt:new Date().toISOString()
                    //     }
                    // })
                    // if(user){
                    //     console.log(user);
                    //     prisma.$disconnect();
                    //     let role;
                    //     if(user.uid.charAt(0) === '0'){
                    //         role = "student";
                    //     }else{
                    //         role = "resolver";
                    //     }
                    //     return {
                    //         uid:credentials.uid,
                    //         role:role
                    //     }
                    // }
import CryptoJS from "crypto-js";
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"
import prisma from "../../prisma_client";

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
                    if (!req.body.callbackUrl.includes("Student")) {
                        uidtype = 1;
                    } else {
                        uidtype = 0;
                    }

                    const emailRegEx = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})+$/);
                    const numericUidRegEx = new RegExp(/^[0-9]{8}$/);
                    if (uidtype === 1 && emailRegEx.test(credentials.uid)) {
                        user = await prisma.userInfo.findUnique({
                            where: {
                                email: credentials.uid
                            },
                            include: {
                                user: true
                            },
                        });
                        user.password = user.user.password;
                    } else if ((uidtype === 1 || uidtype === 0) && numericUidRegEx.test(credentials.uid)) {
                        user = await prisma.userAuth.findUnique({
                            where: { uid: credentials.uid },
                            include: {
                                userInfo: true
                            }
                        });
                        user.userInfo.password = user.password;
                        user = user.userInfo;
                    } else {
                        throw new Error("Please provide valid uid!")
                    }

                    const hashpass = CryptoJS.SHA256(credentials.password + process.env.NEXTAUTH_PASSSECRET).toString(CryptoJS.enc.Hex);
                    // console.log(CryptoJS.SHA256("arjlafd"+process.env.NEXTAUTH_PASSSECRET).toString(CryptoJS.enc.Hex) == hashPass);
                    // console.log(hashPass)
                    if (!user) {
                        throw new Error("User not found!");
                    }
                    if (user && user.password === hashpass) {
                        prisma.$disconnect();
                        let role;
                        if (user.uid.charAt(0) === '0') {
                            role = "student";
                        } else {
                            role = "resolver";
                        }
                        return {
                            uid: user.uid,
                            role: role,
                            image: user.image,
                            email: user.email,
                            name: user.name
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
                return {
                    ...session,
                    user: {
                        ...session.user,
                        uid: token.uid,
                        role: token.role,
                        name: token.name,
                        email: token.email,
                        image: token.image
                    }
                }
            }
            return session;
        },
        async jwt({ user, token }) {
            if (user) {
                return {
                    ...token,
                    uid: user.uid,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
            }
            return token;
        },
        async signIn({ account, profile, user }) {
            if (account.provider === "credentials" && user) {
                user.uid = user.uid;
                user.email = user.email
                user.image = user.image
                user.name = user.name,
                    user.role = user.role
                return true;
            }
            return false;
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }



//code for creating user

// const hashPass = CryptoJS.SHA256("random1234"+process.env.NEXTAUTH_PASSSECRET).toString(CryptoJS.enc.Hex);

// const user = await prisma.userAuth.create({
//     data : {
//         uid : "11623010",
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
import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
                uid:{label:"uid",type:"text"},
                password:{label:"password",type:"text"}
            },
            async authorize(credentials,req){
                try{
                    return {
                        uid:credentials.uid,
                        role:"new"
                    }
                }catch(e){
                    console.log(e)
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        jwt:true
    },
    callbacks:{
        async session({ session, user, token }) {
            console.log(session);
          
            if (token) {
              session.user.uid = token.uid;
              session.user.role = token.role;
            }
          
            return session;
          },
          async jwt({ token, user ,session}) {
            // console.log(token);
            if(user){
                token.uid = user.uid;
                token.role = user.role;
                token.name = token.name;
                token.email = token.email;
            }
            return token;
            },
        async signIn({account,profile,user}){
            if(account.provider === "credentials" && user){
                user.name = user.uid;
                user.email = user.email
                return true
            }
            return true
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET,handler as POST}
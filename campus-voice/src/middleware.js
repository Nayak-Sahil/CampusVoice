export { default } from "next-auth/middleware"

export const config = { 
    matcher: ["/Dashboard:path*","/Dashboard/Student"] 
}
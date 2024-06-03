import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
    '/',
    '/library',
    '/movies',
    '/shows',
    '/profile',
    '/movie(.*)',
    '/show(.*)'
])

export default clerkMiddleware((auth, req) => {
    if(protectedRoutes(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
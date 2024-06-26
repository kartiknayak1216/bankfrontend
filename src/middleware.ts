import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',  // Protect all routes under /dashboard
  
]);

// Apply Clerk middleware to protect the defined routes
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// Configure which paths the middleware applies to
export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

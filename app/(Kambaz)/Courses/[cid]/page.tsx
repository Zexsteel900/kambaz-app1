import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { users, enrollments } from "../../Database";

export default async function CoursesPage({ params, }: { params: Promise<{ cid: string }>; }) {
 const { cid } = await params;

 // Get current user from cookies
 const cookieStore = await cookies();
 const currentUserCookie = cookieStore.get("currentUser");

 if (!currentUserCookie) {
   redirect("/Account/Signin");
 }

 const currentUser = JSON.parse(currentUserCookie.value);

 // Faculty can access all courses
 if (currentUser.role === "FACULTY") {
   redirect(`/Courses/${cid}/Home`);
 }

 // Check if student is enrolled
 const isEnrolled = enrollments.some(
   (enrollment) => enrollment.user === currentUser._id && enrollment.course === cid
 );

 if (!isEnrolled) {
   redirect("/Dashboard");
 }

 redirect(`/Courses/${cid}/Home`);
}

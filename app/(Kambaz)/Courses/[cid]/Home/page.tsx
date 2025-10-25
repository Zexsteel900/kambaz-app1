"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  const { currentUser } = useSelector((state: { accountReducer: { currentUser: { _id: string; role: string } | null } }) => state.accountReducer);
  const { enrollments } = useSelector((state: { enrollmentsReducer: { enrollments: { userId: string; courseId: string }[] } }) => state.enrollmentsReducer);
  const router = useRouter();
  const { cid } = useParams();

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }

    if (currentUser.role === "FACULTY") {
      return; // Faculty can access all courses
    }

    const isEnrolled = enrollments.some(
      (e: { userId: string; courseId: string }) => e.userId === currentUser._id && e.courseId === cid
    );

    if (!isEnrolled) {
      router.push("/Dashboard");
    }
  }, [currentUser, enrollments, cid, router]);

  return (
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill me-3">
          <Modules />
        </div>
        <div className="d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}

// app/(Kambaz)/Courses/[cid]/layout.tsx
"use client";
import { ReactNode, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams() as { cid: string };
  const { courses } = useSelector((state: { coursesReducer: { courses: { _id: string; name: string; number: string; startDate: string; endDate: string; image: string; description: string }[] } }) => state.coursesReducer);
  const course = courses.find((course) => course._id === cid);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setSidebarVisible(!sidebarVisible)}
          style={{ cursor: 'pointer' }}
        />
        {course?.name} Course {cid}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Sidebar */}
        <div className={sidebarVisible ? "d-block" : "d-none"} style={{ width: 200 }}>
          <CourseNavigation cid={cid} />
        </div>

        {/* Main content */}
        <div className="flex-fill p-3">
          {children}
        </div>
      </div>
    </div>
  );
}

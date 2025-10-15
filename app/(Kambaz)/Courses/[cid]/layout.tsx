// app/(Kambaz)/Courses/[cid]/layout.tsx
import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} Course {cid}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Sidebar */}
        <div className="d-none d-md-block" style={{ width: 200 }}>
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

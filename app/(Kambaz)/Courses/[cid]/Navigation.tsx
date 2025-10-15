'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { cid: string };

export default function CourseNavigation({ cid }: Props) {
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 bg-white">
      {links.map((link) => {
        const path = `/Courses/${cid}/${link === "People" ? "People/Table" : link}`;
        const isActive = pathname === path;

        return (
          <Link
            key={link}
            href={path}
            className={`list-group-item border-0 
              ${isActive ? "text-black border-start border-4 border-black" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

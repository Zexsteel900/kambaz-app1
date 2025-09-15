"use client";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button>+ Group</button>
      <button>+ Assignment</button>

      <h3>ASSIGNMENTS 40% <button>+</button></h3>
      <ul>
        <li>
          <Link href="/Courses/1234/Assignments/123">A1 - HTML</Link>
          <div>
            Multiple Modules | <b>Not available until:</b> May 6 at 12:00 am | <b>Due:</b> May 13 at 12:00 am | 100 pts
          </div>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/124">A2 - CSS</Link>
          <div>
            Multiple Modules | <b>Not available until:</b> May 13 at 12:00 am | <b>Due:</b> May 20 at 12:00 am | 100 pts
          </div>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/125">A3 - JavaScript</Link>
          <div>
            Multiple Modules | <b>Not available until:</b> May 20 at 12:00 am | <b>Due:</b> May 27 at 12:00 am | 100 pts
          </div>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/126">A4 - React Components</Link>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/127">A5 - State & Props</Link>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/128">A6 - Routing</Link>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/129">A7 - Node & Express</Link>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/130">A8 - MongoDB</Link>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/131">A9 - Authentication</Link>
        </li>
        <li>
          <Link href="/Courses/1234/Assignments/132">A10 - Deployment</Link>
        </li>
      </ul>
    </div>
  );
}

"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";

// Define TypeScript interfaces
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  // Map URL course IDs to actual course IDs in JSON
  const courseIdMap: Record<string, string> = {
    "1234": "RS101",
    "5678": "RS102",
    "91011": "RS103",
  };

  const actualCourseId = courseIdMap[cid as string];

  if (!actualCourseId) {
    return <p>Invalid course ID.</p>;
  }

  // Filter users enrolled in the current course
  const courseUsers = (users as User[]).filter((user) =>
    (enrollments as Enrollment[]).some(
      (enrollment) =>
        enrollment.user === user._id && enrollment.course === actualCourseId
    )
  );

  if (courseUsers.length === 0) {
    return <p>No users found for this course.</p>;
  }

  return (
    <div id="wd-people-table">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Full Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {courseUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";
import Link from "next/link";
import { ListGroup, ListGroupItem, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { BsPen } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const assignments = [
    {
      id: 123,
      title: "A1 - HTML",
      href: "/Courses/1234/Assignments/123",
      details: "Multiple Modules | Not available until: May 6 at 12:00 am | Due: May 13 at 12:00 am | 100 pts"
    },
    {
      id: 124,
      title: "A2 - CSS",
      href: "/Courses/1234/Assignments/124",
      details: "Multiple Modules | Not available until: May 13 at 12:00 am | Due: May 20 at 12:00 am | 100 pts"
    },
    {
      id: 125,
      title: "A3 - JavaScript",
      href: "/Courses/1234/Assignments/125",
      details: "Multiple Modules | Not available until: May 20 at 12:00 am | Due: May 27 at 12:00 am | 100 pts"
    },
    {
      id: 126,
      title: "A4 - React Components",
      href: "/Courses/1234/Assignments/126",
      details: "Multiple Modules | Not available until: May 27 at 12:00 am | Due: June 3 at 12:00 am | 100 pts"
    },
    {
      id: 127,
      title: "A5 - State & Props",
      href: "/Courses/1234/Assignments/127",
      details: "Multiple Modules | Not available until: June 3 at 12:00 am | Due: June 10 at 12:00 am | 100 pts"
    },
    {
      id: 128,
      title: "A6 - Routing",
      href: "/Courses/1234/Assignments/128",
      details: "Multiple Modules | Not available until: June 10 at 12:00 am | Due: June 17 at 12:00 am | 100 pts"
    },
    {
      id: 129,
      title: "A7 - Node & Express",
      href: "/Courses/1234/Assignments/129",
      details: "Multiple Modules | Not available until: June 17 at 12:00 am | Due: June 24 at 12:00 am | 100 pts"
    },
    {
      id: 130,
      title: "A8 - MongoDB",
      href: "/Courses/1234/Assignments/130",
      details: "Multiple Modules | Not available until: June 24 at 12:00 am | Due: July 1 at 12:00 am | 100 pts"
    },
    {
      id: 131,
      title: "A9 - Authentication",
      href: "/Courses/1234/Assignments/131",
      details: "Multiple Modules | Not available until: July 1 at 12:00 am | Due: July 8 at 12:00 am | 100 pts"
    },
    {
      id: 132,
      title: "A10 - Deployment",
      href: "/Courses/1234/Assignments/132",
      details: "Multiple Modules | Not available until: July 8 at 12:00 am | Due: July 15 at 12:00 am | 100 pts"
    }
  ];

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignments" suppressHydrationWarning={true} />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-2">
            <BsPlus /> Group
          </Button>
          <Button variant="danger">
            <BsPlus /> Assignment
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4 border border-light p-3 rounded">
        <h3 className="mb-0">ASSIGNMENTS</h3>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark rounded-pill me-2 px-3 py-2">40% total</span>
          <BsPlus className="me-2 fs-4 text-muted" />
          <IoEllipsisVertical className="fs-4 text-muted" />
        </div>
      </div>
      <ListGroup className="rounded-0">
        {assignments.map((assignment) => (
          <ListGroupItem key={assignment.id} className="wd-assignment p-3 ps-1 border-start border-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="position-relative me-2 text-success">
                <LiaBookSolid className="fs-3" />
                <BsPen className="position-absolute fs-6" style={{top: '2px', right: '2px'}} />
              </div>
              <Link href={assignment.href} className="text-decoration-none flex-grow-1 ms-2">
                <h5 className="mb-1">{assignment.title}</h5>
              </Link>
              <AssignmentControlButtons />
            </div>
            <p className="text-muted small mb-0 ms-5">{assignment.details}</p>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

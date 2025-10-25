'use client';
import Link from "next/link";
import { ListGroup, ListGroupItem, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { BsPen } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Assignments() {
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid; // ✅ normalize to string

  // Map URL course IDs to actual course IDs in your JSON
  const courseIdMap: Record<string, string> = {
    "1234": "RS101",
    "5678": "RS102",
    "91011": "RS103"
  };

  const mappedCourseId = courseIdMap[cid ?? ""]; // ✅ handles undefined safely

  const { assignments } = useSelector((state: { assignmentsReducer: { assignments: { _id: string; title: string; course: string; description: string; points: number; dueDate: string; availableFromDate: string; availableUntilDate: string }[] } }) => state.assignmentsReducer);

  const courseAssignments = assignments.filter(
    (a) => a.course === mappedCourseId
  );

  if (!courseAssignments.length) {
    return <p>No assignments found for this course.</p>;
  }

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
          <Link href={`/Courses/${cid}/Assignments/new`} className="btn btn-danger">
            <BsPlus /> Assignment
          </Link>
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
        {courseAssignments.map((assignment) => (
          <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1 border-start border-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="position-relative me-2 text-success">
                <LiaBookSolid className="fs-3" />
                <BsPen className="position-absolute fs-6" style={{ top: "2px", right: "2px" }} />
              </div>

              <Link
                href={`/Courses/${cid}/Assignments/${assignment._id}`}
                className="text-decoration-none flex-grow-1 ms-2"
              >
                <h5 className="mb-1">{assignment.title}</h5>
              </Link>

              <AssignmentControlButtons assignmentId={assignment._id} />
            </div>

            <p className="text-muted small mb-0 ms-5">
              Multiple Modules | Not available until: TBD | Due: TBD | 100 pts
            </p>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

"use client";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addAssignment } from "../reducer";

export default function NewAssignment() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
    course: cid,
  });

  const handleSave = () => {
    dispatch(addAssignment(assignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-new-assignment">
      <h2>New Assignment</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            placeholder="Enter assignment name"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <Form.Control
            id="wd-points"
            type="number"
            placeholder="Enter points"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          <Form.Control
            id="wd-due-date"
            type="datetime-local"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
          <Form.Control
            id="wd-available-from"
            type="datetime-local"
            value={assignment.availableDate}
            onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-available-until">Until</Form.Label>
          <Form.Control
            id="wd-available-until"
            type="datetime-local"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Button onClick={handleSave} className="btn btn-primary">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

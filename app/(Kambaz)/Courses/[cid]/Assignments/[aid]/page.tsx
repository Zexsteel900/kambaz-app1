"use client";
import { Form, Button, Badge } from "react-bootstrap";
import { useState } from "react";

export default function EditAssignment() {
  const [selected, setSelected] = useState(["Everyone"]);

  return (
    <div id="wd-edit-assignment">
      <h2>Edit Assignment</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control id="wd-name" type="text" placeholder="Enter assignment name" defaultValue="A1 - HTML" />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" defaultValue="This assignment covers HTML basics." />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <Form.Control id="wd-points" type="number" placeholder="Enter points" defaultValue="100" />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          <Form.Select id="wd-group" defaultValue="Assignments">
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            <option value="Project">Project</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          <Form.Select id="wd-submission-type" defaultValue="Online">
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="External Tool">External Tool</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label>Online Entry Options</Form.Label>
          <Form.Check id="wd-text-entry" type="checkbox" label="Text Entry" />
          <Form.Check id="wd-website-url" type="checkbox" label="Website URL" />
          <Form.Check id="wd-media-recordings" type="checkbox" label="Media Recordings" />
          <Form.Check id="wd-student-annotation" type="checkbox" label="Student Annotation" />
          <Form.Check id="wd-file-upload" type="checkbox" label="File Uploads" defaultChecked />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label>Assign to</Form.Label>
          <div>
            {selected.map(s => (
              <Badge key={s} bg="secondary" className="me-2 mb-1">
                {s} <Button variant="link" size="sm" className="p-0 ms-1 text-white" onClick={() => setSelected(selected.filter(x => x !== s))}>×</Button>
              </Badge>
            ))}
          </div>
          <Form.Select id="wd-assign-to" onChange={(e) => {
            const value = e.target.value;
            if (value && !selected.includes(value)) {
              setSelected([...selected, value]);
            }
          }}>
            <option value="">Select to add</option>
            <option value="Everyone">Everyone</option>
            <option value="Section 1">Section 1</option>
            <option value="Section 2">Section 2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          <Form.Control id="wd-due-date" type="datetime-local" defaultValue="2024-05-13T12:00" />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
          <Form.Control id="wd-available-from" type="datetime-local" defaultValue="2024-05-06T12:00" />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-available-until">Until</Form.Label>
          <Form.Control id="wd-available-until" type="datetime-local" defaultValue="2024-05-20T12:00" />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </div>
  );
}

"use client";
import { Form, Button, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "../reducer";

export default function EditAssignment() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: { assignmentsReducer: { assignments: { _id: string; title: string; course: string; description: string; points: number; dueDate: string; availableFromDate: string; availableUntilDate: string }[] } }) => state.assignmentsReducer);
  const assignment = assignments.find((a) => a._id === aid);
  const [selected, setSelected] = useState(["Everyone"]);
  const [formData, setFormData] = useState<{ title?: string; description?: string; points?: number; course?: string; _id?: string; dueDate?: string; availableFromDate?: string; availableUntilDate?: string }>({});

  useEffect(() => {
    if (assignment) {
      setFormData(assignment);
    }
  }, [assignment]);

  if (!assignment) {
    return <p>Assignment not found.</p>;
  }

  const handleSave = () => {
    dispatch(updateAssignment(formData));
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-edit-assignment">
      <h2>Edit Assignment</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            placeholder="Enter assignment name"
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <Form.Control
            id="wd-points"
            type="number"
            placeholder="Enter points"
            value={formData.points || ""}
            onChange={(e) => setFormData({ ...formData, points: parseInt(e.target.value) })}
          />
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
          <Form.Control id="wd-due-date" type="datetime-local" defaultValue={assignment.dueDate} />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
          <Form.Control id="wd-available-from" type="datetime-local" defaultValue={assignment.availableFromDate} />
        </Form.Group>
        <Form.Group className="mb-3 border p-3">
          <Form.Label htmlFor="wd-available-until">Until</Form.Label>
          <Form.Control id="wd-available-until" type="datetime-local" defaultValue={assignment.dueDate} />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
          <Button onClick={handleSave} className="btn btn-primary">Save</Button>
        </div>
      </Form>
    </div>
  );
}

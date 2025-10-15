'use client';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { modules } from "../../../Database";
import { useParams } from "next/navigation";

export default function Modules() {
  const params = useParams();
  const cid = params?.cid;

  if (!cid) return <div>No course selected</div>;

  const courseModules = modules.filter(m => m.course === cid);

  if (courseModules.length === 0) return <div>No modules found for this course</div>;

  return (
    <div id="wd-modules">
      <div className="d-flex">
        <div className="flex-fill me-3">
          <ModulesControls /><br /><br /><br /><br />
          <ListGroup className="rounded-0" id="wd-modules-list">
            {courseModules.map((module) => {
              const lessons = module.lessons ?? []; // default to empty array
              return (
                <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
                  </div>
                  <ListGroup className="wd-lessons rounded-0">
                    {lessons.length > 0
                      ? lessons.map((lesson) => (
                          <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                          </ListGroupItem>
                        ))
                      : <ListGroupItem className="wd-lesson p-3 ps-1">No lessons for this module</ListGroupItem>
                    }
                  </ListGroup>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

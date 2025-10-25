"use client";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enroll, unenroll } from "../Enrollments/reducer";
import * as db from "../Database";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const [showEnrolledOnly, setShowEnrolledOnly] = useState(false);

  const handleAddNewCourse = () => {
    dispatch(addNewCourse(course));
  };

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={() => dispatch(addNewCourse(course))}> Add </button>
        <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl value={course.description} as="textarea" rows={3}
                   onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      {currentUser && currentUser.role !== "FACULTY" && (
        <Button
          variant="primary"
          className="mb-3"
          onClick={() => setShowEnrolledOnly(!showEnrolledOnly)}
        >
          Enrollments
        </Button>
      )}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          {courses
            .filter((course) => {
              if (!currentUser) return true;
              if (currentUser.role === "FACULTY") return true;
              if (showEnrolledOnly) {
                return enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                );
              }
              return true;
            })
            .map((course: any) => {
              const isEnrolled = enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser?._id &&
                  enrollment.course === course._id
              );
              return (
                <Col key={course._id} className="wd-dashboard-course" style={{ width: "270px" }}>
                  <Card>
                    <Link href={`/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                      <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                      <CardBody>
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</CardTitle>
                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          {course.description}
                        </CardText>
                        <Button variant="primary">Go</Button>
                        {currentUser && currentUser.role !== "FACULTY" && (
                          <Button
                            variant={isEnrolled ? "danger" : "success"}
                            className="me-2"
                            onClick={(event) => {
                              event.preventDefault();
                              if (isEnrolled) {
                                dispatch(unenroll({ userId: currentUser._id, courseId: course._id }));
                              } else {
                                dispatch(enroll({ userId: currentUser._id, courseId: course._id }));
                              }
                            }}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </Button>
                        )}
                        {currentUser && currentUser.role === "FACULTY" && (
                          <>
                            <Button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end" >
                              Edit
                            </Button>
                            <Button onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                              Delete
                            </Button>
                          </>
                        )}
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

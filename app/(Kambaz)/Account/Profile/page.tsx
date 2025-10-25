"use client";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state: { accountReducer: { currentUser: { _id: string; username: string; password: string; firstName: string; lastName: string; email: string; dob: string; role: string } | null } }) => state.accountReducer);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control value={currentUser?.username || ""} placeholder="username" className="wd-username mb-2"/><br/>
      <Form.Control value={currentUser?.password || ""} placeholder="password" type="password" className="wd-password mb-2" /><br/>
      <Form.Control value={currentUser?.firstName || ""} placeholder="First Name" id="wd-firstname" className="mb-2" /><br/>
      <Form.Control value={currentUser?.lastName || ""} placeholder="Last Name" id="wd-lastname" className="mb-2" /><br/>
      <Form.Control value={currentUser?.dob?.split('T')[0] || ""} type="date" id="wd-dob" className="mb-2" /><br/>
      <Form.Control value={currentUser?.email || ""} type="email" id="wd-email" className="mb-2" /><br/>
      <Form.Select value={currentUser?.role || "USER"} id="wd-role" className="mb-2">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Select><br/>
      <Button href="Signin" variant="danger" className="w-100">Sign out</Button>
    </div>
);}

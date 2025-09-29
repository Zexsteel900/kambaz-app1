import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control defaultValue="Jeet" placeholder="username" className="wd-username mb-2"/><br/>
      <Form.Control defaultValue="123" placeholder="password" type="password" className="wd-password mb-2" /><br/>
      <Form.Control defaultValue="Jeet" placeholder="First Name" id="wd-firstname" className="mb-2" /><br/>
      <Form.Control defaultValue="Narkhede" placeholder="Last Name" id="wd-lastname" className="mb-2" /><br/>
      <Form.Control defaultValue="2004-05-10" type="date" id="wd-dob" className="mb-2" /><br/>
      <Form.Control defaultValue="jeet@narkhede" type="email" id="wd-email" className="mb-2" /><br/>
      <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Select><br/>
      <Button href="Signin" variant="danger" className="w-100">Sign out</Button>
    </div>
);}

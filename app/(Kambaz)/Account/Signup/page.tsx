import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form.Control defaultValue="Zex" placeholder="username" className="wd-username mb-2" /><br/>
      <Form.Control defaultValue="Steel" placeholder="password" type="password" className="wd-password mb-2" /><br/>
      <Form.Control placeholder="verify password" type="password" className="wd-password-verify mb-2" /><br/>
      <Link href="Profile" className="btn btn-primary w-100 mb-2">Sign up</Link><br />
      <Link href="Signin">Sign in</Link>
    </div>
);}

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
 return (
   <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <Form.Control id="wd-username" placeholder="username" defaultValue="Jeet" className="mb-2" /> <br />
      <Form.Control id="wd-password" placeholder="password" type="password" defaultValue="Narkhede" className="mb-2" /> <br />
      <Link id="wd-signin-btn" href="/Dashboard" className="btn btn-primary w-100 mb-2">Sign in</Link> <br />
      <Link id="wd-signup-link" href="Signup">Sign up</Link>
    </div>
);}

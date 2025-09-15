import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS12345" className="wd-dashboard-course-link">
            <Image src="/images/nextjs.jpg" width={200} height={150} alt="Next.js" />
            <div>
              <h5>CS12345 Next.js</h5>
              <p className="wd-dashboard-course-title">Modern Web Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS123456" className="wd-dashboard-course-link">
            <Image src="/images/javascript.jpg" width={200} height={150} alt="JavaScript" />
            <div>
              <h5>CS123456 JavaScript</h5>
              <p className="wd-dashboard-course-title">Programming Basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234567" className="wd-dashboard-course-link">
            <Image src="/images/htmlcss.jpg" width={200} height={150} alt="HTML & CSS" />
            <div>
              <h5>CS1234567 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Frontend Essentials</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS12345678" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="Node.js" />
            <div>
              <h5>CS12345678 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS123456789" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt="Python" />
            <div>
              <h5>CS123456789 Python</h5>
              <p className="wd-dashboard-course-title">Programming Fundamentals</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

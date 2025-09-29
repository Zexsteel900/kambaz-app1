// app/(Kambaz)/Navigation.tsx
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaFlaskSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 text-center"
    >
      {/* Northeastern logo */}
      <ListGroupItem
        className="bg-black border-0"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img
          src="/images/NEU.jpg"
          width="75px"
          alt="Northeastern University"
        />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem className="border-0 bg-black">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none d-block"
        >
          <FaRegCircleUser className="fs-1 mb-1 text-white" />
          <div>Account</div>
        </Link>
      </ListGroupItem>

      {/* Dashboard (active) */}
      <ListGroupItem className="border-0 bg-white">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none d-block"
        >
          <AiOutlineDashboard className="fs-1 mb-1 text-danger" />
          <div>Dashboard</div>
        </Link>
      </ListGroupItem>

      {/* Courses */}
      <ListGroupItem className="border-0 bg-black">
        <Link
          href="/Courses"
          id="wd-course-link"
          className="text-white text-decoration-none d-block"
        >
          <LiaBookSolid className="fs-1 mb-1 text-danger" />
          <div>Courses</div>
        </Link>
      </ListGroupItem>

      {/* Calendar (external) */}
      <ListGroupItem className="border-0 bg-black">
        <a
          href="https://calendar.google.com/calendar"
          id="wd-calendar-link"
          target="_blank"
          className="text-white text-decoration-none d-block"
        >
          <IoCalendarOutline className="fs-1 mb-1 text-danger" />
          <div>Calendar</div>
        </a>
      </ListGroupItem>

      {/* Inbox (external) */}
      <ListGroupItem className="border-0 bg-black">
        <a
          href="https://outlook.office.com/mail/inbox/"
          id="wd-inbox-link"
          target="_blank"
          className="text-white text-decoration-none d-block"
        >
          <FaInbox className="fs-1 mb-1 text-danger" />
          <div>Outlook</div>
        </a>
      </ListGroupItem>

      {/* Labs */}
      <ListGroupItem className="border-0 bg-black">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-white text-decoration-none d-block"
        >
          <LiaFlaskSolid className="fs-1 mb-1 text-danger" />
          <div>Labs</div>
        </Link>
      </ListGroupItem>

      {/* Settings */}
      <ListGroupItem className="border-0 bg-black">
        <Link
          href="/Settings"
          id="wd-settings-link"
          className="text-white text-decoration-none d-block"
        >
          <LiaCogSolid className="fs-1 mb-1 text-danger" />
          <div>Settings</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}

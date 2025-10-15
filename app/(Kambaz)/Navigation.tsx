'use client';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaFlaskSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();

  // Configure links dynamically
  const links = [
    {
      label: "Account",
      path: "/Account",
      icon: FaRegCircleUser,
      external: false,
    },
    {
      label: "Dashboard",
      path: "/Dashboard",
      icon: AiOutlineDashboard,
      external: false,
    },
    {
      label: "Courses",
      path: "/Courses",
      icon: LiaBookSolid,
      external: false,
    },
    {
      label: "Calendar",
      path: "https://calendar.google.com/calendar",
      icon: IoCalendarOutline,
      external: true,
    },
    {
      label: "Inbox",
      path: "https://outlook.office.com/mail/inbox/",
      icon: FaInbox,
      external: true,
    },
    {
      label: "Labs",
      path: "/Labs",
      icon: LiaFlaskSolid,
      external: false,
    },
    {
      label: "Settings",
      path: "/Settings",
      icon: LiaCogSolid,
      external: false,
    },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 text-center"
    >
      {/* NEU Logo */}
      <ListGroupItem
        className="bg-black border-0"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.jpg" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Map over links dynamically */}
      {links.map((link) => {
        const isActive = pathname.startsWith(link.path);
        const classes = `border-0 text-center ${
          isActive ? "bg-white text-danger" : "bg-black text-white"
        }`;

        if (link.external) {
          return (
            <ListGroupItem
              key={link.label}
              className={classes}
              as="a"
              href={link.path}
              target="_blank"
            >
              <link.icon className="fs-1 mb-1 text-danger" />
              <div>{link.label}</div>
            </ListGroupItem>
          );
        } else {
          return (
            <ListGroupItem key={link.label} className={classes} as={Link} href={link.path}>
              <link.icon className="fs-1 mb-1 text-danger" />
              <div>{link.label}</div>
            </ListGroupItem>
          );
        }
      })}
    </ListGroup>
  );
}

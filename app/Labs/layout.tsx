'use client';
import { ReactNode } from "react";
import TOC from "./TOC";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LabsLayout({
 children,
}: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const isAccountActive = pathname.startsWith('/Account');
  const isDashboardActive = pathname.startsWith('/Dashboard');
  const isCoursesActive = pathname.startsWith('/Courses');
  const isLabsActive = pathname.startsWith('/Labs');
 return (
   <div id="wd-kambaz">
     <div className="d-flex">
       <div>
     <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-sm-block bg-black z-2" style={{ width: 110 }}
              id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <img src="/images/NEU.jpg" width="75px" alt="Northeastern University" />
     </ListGroupItem>
     <ListGroupItem className={`border-0 ${isAccountActive ? 'bg-white' : 'bg-black'} text-center`}>
       <Link href="/Account" id="wd-account-link" className={`${isAccountActive ? 'text-danger' : 'text-white'} text-decoration-none`}>
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`border-0 ${isDashboardActive ? 'bg-white' : 'bg-black'} text-center`}>
       <Link href="/Dashboard" id="wd-dashboard-link" className={`${isDashboardActive ? 'text-danger' : 'text-white'} text-decoration-none`}>
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`border-0 ${isCoursesActive ? 'bg-white' : 'bg-black'} text-center`}>
       <Link href="/Courses/1234" id="wd-course-link" className={`${isCoursesActive ? 'text-danger' : 'text-white'} text-decoration-none`}>
         <LiaBookSolid className="fs-1 text-danger" />
         <br />
         Courses
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <a href="https://calendar.google.com/calendar" id="wd-calendar-link" target="_blank" className="text-white text-decoration-none">
         <IoCalendarOutline className="fs-1 text-danger" />
         <br />
         Calendar
       </a>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <a href="https://outlook.office.com/mail/inbox/" id="wd-inbox-link" target="_blank" className="text-white text-decoration-none">
         <FaInbox className="fs-1 text-danger" />
         <br />
         Inbox
       </a>
     </ListGroupItem>
     <ListGroupItem className={`border-0 ${isLabsActive ? 'bg-white' : 'bg-black'} text-center`}>
       <Link href="/Labs" id="wd-labs-link" className={`${isLabsActive ? 'text-danger' : 'text-white'} text-decoration-none`}>
         <LiaCogSolid className="fs-1 text-danger" />
         <br />
         Labs
       </Link>
     </ListGroupItem>
   </ListGroup>
       </div>
       <div className="wd-main-content-offset p-3 flex-fill">
         <table>
           <tbody>
             <tr>
               <td valign="top" width="100px">
                 <TOC />
               </td>
               <td valign="top">{children}</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   </div>
);}

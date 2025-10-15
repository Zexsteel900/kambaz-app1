'use client';
import React from "react";
import { usePathname } from "next/navigation";

type Course = { name: string } | undefined;

export default function Breadcrumb({ course }: { course: Course }) {
  const pathname = usePathname();  
  const parts = pathname.split("/").filter(Boolean); // split and remove empty strings

  // Get last part for current section
  let section = parts[parts.length - 1];

  // Handle special cases like "People/Table"
  if (section === "Table" && parts[parts.length - 2] === "People") {
    section = "People";
  }

  // Capitalize first letter
  const sectionLabel = section ? section.charAt(0).toUpperCase() + section.slice(1) : "";

  return (
    <nav aria-label="breadcrumb" className="mb-2">
      <span className="text-danger">
        {`Course ${course?.name}`} {sectionLabel && `> ${sectionLabel}`}
      </span>
    </nav>
  );
}

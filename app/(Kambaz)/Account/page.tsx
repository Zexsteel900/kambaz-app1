"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function AccountPage() {
  const { currentUser } = useSelector((state: { accountReducer: { currentUser: { _id: string; username: string; firstName: string; lastName: string; role: string } | null } }) => state.accountReducer);
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}

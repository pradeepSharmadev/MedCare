"use client";

import { redirect } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

export default function DoctorLayout({ children }) {
  // const user = await getUser();
  const { user, setUser } = useUserContext();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "doctor") {
    redirect(`/dashboard/${user.role}`);
  }

  return children;
}

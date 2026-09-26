"use client";

import { redirect } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

export default function DashboardLayout({ children }) {
  // const user = await getUser();
  // const user = { role: "patient", name: "Ram", id:"123" }

  const { user, setUser } = useUserContext();

  if (!user) {
    redirect("/login");
  }

  return <div>{children}</div>;
}

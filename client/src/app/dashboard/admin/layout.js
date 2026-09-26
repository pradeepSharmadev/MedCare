"use client";

import { redirect } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

export default function AdminLayout({ children }) {
  // const user = await getUser();
  const { user, setUser } = useUserContext();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "admin") {
    redirect(`/dashboard/${user.role}`);
  }

  return children;
}

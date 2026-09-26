"use client"

import { redirect } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

export default async function PublicLayout({ children }) {
  // const user = await getUser();
  const { user, setUser } = useUserContext();

  if (user) {
    redirect(`/dashboard/${user.role}`);
  }

  return children;
}
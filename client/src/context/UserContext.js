
"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ role: "patient", name: "Ram", id:"123" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
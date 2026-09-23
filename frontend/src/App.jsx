import React, { lazy, Suspense, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Patient from "./pages/dash/Patient";
import Profile from "./components/patient/Profile";
import Landing from "./pages/Landing";
import Test from "./components/Test";

const App = () => {
  const [user, setUser] = useState(); // { role: "patient", name: "Ram" }
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicRoutes user={user} setUser={setUser} />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
        </Route>

        <Route element={<PrivateRoutes user={user} />}>
          <Route path="/dash/patient" element={<Patient />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/dash/doctor" element={<Patient />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/dash/admin" element={<Patient />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404-Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;

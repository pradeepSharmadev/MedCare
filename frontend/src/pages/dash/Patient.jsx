import React from "react";
import Sidebar from "../../components/patient/Sidebar";
import Profile from "../../components/patient/Profile";

const Patient = () => {
  return (
    <>
      <div>Patient Dashboard </div>
      <Sidebar />
      <Profile />
    </>
  );
};

export default Patient;

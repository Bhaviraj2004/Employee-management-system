import React from "react";
import Header from "../submain/header";
import CreateTask from "../submain/CreateTask";
import AllTask from "../submain/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen p-10">
      <Header />
      <CreateTask />
        <AllTask />
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import "./FacultyDashboard.css";
import MarksEntry from "./MarksEntry";
import Attendance from "./Attendance";

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">St.Joseph Engineering College</h2>
        
        <ul className="nav-links">
          <li>📊 Dashboard</li>
          <li>📅 Timetable</li>
          <li>📝 My Attendance</li>
          <li>📈 My Performance</li>
          
          
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="dashboard-title">Faculty Dashboard</h2>

        <div className="overview">
          <div className="card">
            <h3>Total Attendance</h3>
            <p>✅ 75% </p>
          </div>
          <div className="card">
            <h3>Performance</h3>
            <p>✅ 80% </p>
          </div>
          <div className="card">
            <h3>Course Completion</h3>
            <p>✅ 90% </p>
          </div>
        </div>

        <MarksEntry />
        <Attendance />
      </div>

      {/* Faculty Profile */}
      <div className="faculty-profile">
        <img src="https://tse4.mm.bing.net/th?id=OIP.hifp7dijlffqjLkvaJRv5gHaLH&pid=Api&P=0&h=220" alt="Faculty" className="profile-pic" />
        <h3>Lorea</h3>
        <p><b>ERP#:</b> D1</p>
        <p><b>Employment Date:</b> 01/02/2020</p>
        <p><b>Designation:</b> Professor</p>
        <p><b>Department:</b> Mathematics</p>
        <p><b>Workplace:</b> Vamnjoor</p>
      </div>
    </div>
  );
};

export default FacultyDashboard;



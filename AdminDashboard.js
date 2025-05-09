import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Admin Panel</h2>
        <ul className="nav-links">
          <li><a href="#">&#x1F4CA; Dashboard</a></li>
          <li><a href="#">&#x1F4C4; Forms</a></li>
          
          <li><a href="#">&#x1F4D1; Tables</a></li>
          <li><a href="#">&#x1F527; Settings</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <div className="top-nav">
          <h2 className="dashboard-title">Admin Dashboard</h2>
          <div className="profile">
            <span className="user-name">Admin</span>
            <img
              src="https://th.bing.com/th/id/OIP.sfRvQsGcmLFLFbeaauvPTgHaHa?rs=1&pid=ImgDetMain"
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>

        {/* Admin Options */}
        <div className="card-container">
          <div className="card">
            <span className="card-icon">&#x1F3E2;</span>
            <h3>Manage Departments</h3>
          </div>
          <div className="card">
            <span className="card-icon">&#x1F465;</span>
            <h3>Manage Users</h3>
          </div>
          <div className="card">
            <span className="card-icon">&#x2705;</span>
            <h3>Approve Students</h3>
          </div>
          <div className="card">
            <span className="card-icon">&#x2699;</span>
            <h3>System Configuration</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


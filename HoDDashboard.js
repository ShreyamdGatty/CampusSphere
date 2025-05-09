import React from "react";
import "./HODDashboard.css";

const HODDashboard = () => {
  return (
    <div className="hod-dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2 className="logo">HOD Panel</h2>
        <ul className="nav-links">
          <li>📊 Dashboard</li>
          <li>📄 Approve Marks</li>
          <li>📝 Freeze Data</li>
          <li>📅 Schedule Management</li>
          <li>📁 Course Files</li>
          <li>📜 Faculty Reports</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="dashboard-title">HOD Dashboard</h2>

        <div className="hod-actions">
          <button className="hod-btn approve">✅ Approve Marks</button>
          <button className="hod-btn freeze">🧊 Freeze Data</button>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;

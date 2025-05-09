import React from "react";
import "./ExamDashboard.css";

const ExamDashboard = () => {
  return (
    <div className="exam-dashboard">
      {/* Sidebar Navigation */}
      <div className="exam-sidebar">
        <h2 className="exam-logo">Exam Panel</h2>
        <ul className="exam-nav-links">
          <li>🏠 Dashboard</li>
          <li>🎟 Generate Hall Tickets</li>
          <li>📤 Upload Marks</li>
          <li>📅 Exam Schedule</li>
          <li>📁 Results Processing</li>
          <li>📜 Reports</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="exam-main-content">
        <h2 className="exam-title">Exam Department Dashboard</h2>

        <div className="exam-actions">
          <button className="exam-btn hall-ticket">🎟 Generate Hall Tickets</button>
          <button className="exam-btn upload-marks">📤 Upload Semester-End Marks</button>
        </div>
      </div>
    </div>
  );
};

export default ExamDashboard;


import React, { useState } from "react";
import "./Attendance.css";

const Attendance = () => {
  const [students, setStudents] = useState(["Student 1", "Student 2", "Student 3"]);
  const [attendance, setAttendance] = useState({});

  const markAttendance = (student) => {
    setAttendance((prev) => ({ ...prev, [student]: !prev[student] }));
  };

  return (
    <div className="attendance-container">
      <h3 className="attendance-title">Take Attendance</h3>
      <div className="attendance-card">
        {students.map((student) => (
          <div key={student} className="attendance-row">
            <span className="student-name">{student}</span>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => markAttendance(student)}
                checked={attendance[student] || false}
              />
              <span className="slider round"></span>
            </label>
          </div>
        ))}
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default Attendance;

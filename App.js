import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import FacultyDashboard from "./components/FacultyDashboard";
import HoDDashboard from "./components/HoDDashboard";
import ExamDashboard from "./components/ExamDashboard";
import StudentDashboard from "./components/StudentDashboard";

const App = () => {
  const [userRole, setUserRole] = useState("");
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", rollNumber: "", marks: 0 });

  // Fetch student data when component loads
  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students", error));
  }, []);

  // Handle adding a new student
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/Students", newStudent)
      .then(() => {
        setNewStudent({ name: "", rollNumber: "", marks: 0 });
        window.location.reload();
      })
      .catch(err => console.error("Error adding student", err));
  };

  return (
    <div>
      {/* Login Page */}
      {userRole === "" && <Login setUserRole={setUserRole} />}

      {/* Role-Based Dashboards */}
      {userRole === "Admin" && <AdminDashboard />}
      {userRole === "Faculty" && <FacultyDashboard />}
      {userRole === "HOD" && <HoDDashboard />}
      {userRole === "Exam" && <ExamDashboard />}
      {userRole === "Student" && <StudentDashboard />}

      {/* Student List & Add Form */}
      {userRole === "Admin" && (
        <div>
          <h2>Student List</h2>
          <ul>
            {students.map(student => (
              <li key={student._id}>
                {student.name} - {student.rollNumber} - Marks: {student.marks}
              </li>
            ))}
          </ul>

          <h2>Add Student</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Roll Number"
              value={newStudent.rollNumber}
              onChange={(e) => setNewStudent({ ...newStudent, rollNumber: e.target.value })}
            />
            <input
              type="number"
              placeholder="Marks"
              value={newStudent.marks}
              onChange={(e) => setNewStudent({ ...newStudent, marks: e.target.value })}
            />
            <button type="submit">Add Student</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", marks: "" });
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch students from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students", error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  // Handle add/update student
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      axios
        .put(`http://localhost:5000/api/students/${editingStudent._id}`, newStudent)
        .then((response) => {
          setStudents(students.map((student) => (student._id === editingStudent._id ? response.data : student)));
          setEditingStudent(null);
          setNewStudent({ name: "", email: "", marks: "" });
        })
        .catch((error) => console.error("Error updating student", error));
    } else {
      axios
        .post("http://localhost:5000/api/students", newStudent)
        .then((response) => {
          setStudents([...students, response.data]);
          setNewStudent({ name: "", email: "", marks: "" });
        })
        .catch((error) => console.error("Error adding student", error));
    }
  };

  // Handle edit button click
  const handleEdit = (student) => {
    setNewStudent(student);
    setEditingStudent(student);
  };

  // Handle delete student
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/students/${id}`)
      .then(() => {
        setStudents(students.filter((student) => student._id !== id));
      })
      .catch((error) => console.error("Error deleting student", error));
  };

  return (
    <div className="dashboard-container">
      <h2>Student Dashboard</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={newStudent.email} onChange={handleChange} required />
        <input type="number" name="marks" placeholder="Marks" value={newStudent.marks} onChange={handleChange} required />
        <button type="submit">{editingStudent ? "Update Student" : "Add Student"}</button>
      </form>

      <h3>Student List</h3>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student._id} className="student-item">
            <span>{student.name} - {student.email} - Marks: {student.marks}</span>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(student)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(student._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;



import React, { useState } from "react";
import "./MarksEntry.css";

const MarksEntry = () => {
  const [marksList, setMarksList] = useState([
    { id: 1, student: "Alice", subject: "Math", marks: 85 },
    { id: 2, student: "Bob", subject: "Physics", marks: 90 },
  ]);
  const [newStudent, setNewStudent] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newMarks, setNewMarks] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!newStudent || !newSubject || !newMarks) return;

    if (editId) {
      setMarksList(
        marksList.map((item) =>
          item.id === editId
            ? { ...item, student: newStudent, subject: newSubject, marks: newMarks }
            : item
        )
      );
      setEditId(null);
    } else {
      const newEntry = {
        id: Date.now(),
        student: newStudent,
        subject: newSubject,
        marks: Number(newMarks),
      };
      setMarksList([...marksList, newEntry]);
    }

    setNewStudent("");
    setNewSubject("");
    setNewMarks("");
  };

  const handleEdit = (id) => {
    const item = marksList.find((entry) => entry.id === id);
    setNewStudent(item.student);
    setNewSubject(item.subject);
    setNewMarks(item.marks);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setMarksList(marksList.filter((entry) => entry.id !== id));
  };

  return (
    <div className="marks-entry">
      <h3>Marks Entry</h3>
      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          value={newMarks}
          onChange={(e) => setNewMarks(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <table className="marks-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marksList.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.student}</td>
              <td>{entry.subject}</td>
              <td>{entry.marks}</td>
              <td>
                <button onClick={() => handleEdit(entry.id)}>✏️ Edit</button>
                <button onClick={() => handleDelete(entry.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksEntry;



require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // Allows JSON request body parsing
app.use(cors()); // Enables Cross-Origin Resource Sharing

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API Routes
app.use("/api/students", require("./routes/Students")); // 👈 Add this line here

// Default Route
app.get("/", (req, res) => res.send("API Running"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

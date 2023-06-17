const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vikas18:Virat18*@cluster0.s255uxr.mongodb.net/admissiondb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Create a schema for the admission form data
const admissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
});

// Create a model based on the admission schema
const Admission = mongoose.model("Admission", admissionSchema);

// API endpoint to handle form submission
app.post("/api/admission", (req, res) => {
  const { name, email, age, gender } = req.body;

  // Create a new admission instance
  const newAdmission = new Admission({ name, email, age, gender });

  // Save the admission data to MongoDB
  newAdmission
    .save()
    .then(() =>
      res.status(200).json({ message: "Admission form submitted successfully" })
    )
    .catch((err) =>
      res.status(500).json({
        error: "An error occurred while submitting the admission form",
      })
    );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

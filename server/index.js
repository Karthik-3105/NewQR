import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import StudentsModel from "./models/student.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/StudentDB", {})
  .then((student) => {
    res.json(student);
  })
  .catch((error) => {
    res.json(error);
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  StudentsModel.findOne({ email: email, password: password })
    .then((student) => {
      if (student) {
        if (student.password !== password) {
          return res.status(404).json({ message: "Invalid email or password" });
        }
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(404).json({ message: "Invalid email or password" });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.get("/getSingleUser", (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  StudentsModel.findOne({ email })
    .then((student) => {
      res.json(student);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.get("/getUser", (req, res) => {
  StudentsModel.find()
    .then((student) => res.json(student))
    .catch((error) => res.json(error));
});

app.listen(3001, () => {
  console.log("Server is running");
});

// app.post("/adminlogin", (req, res) => {
//   const { email, password } = req.body;
//   StudentsModel.findOne({ email: email, password: password })
//     .then((student) => {
//       if (student) {
//         if (student.password !== password) {
//           return res.status(404).json({ message: "Invalid email or password" });
//         }
//         return res.status(200).json({ message: "Login successful" });
//       } else {
//         return res.status(404).json({ message: "Invalid email or password" });
//       }
//     })
//     .catch((error) => res.status(500).json({ error: error.message }));
// });

// app.post("/register", (req, res) => {
//   const { email, contact } = req.body;

//   Promise.all([
//     StudentsModel.findOne({ email: email }),
//     StudentsModel.findOne({ contact: contact }),
//   ])
//     .then(([existingEmail, existingContact]) => {
//       if (existingEmail) {
//         return res.status(400).json({ message: "Email is already registered" });
//       }
//       if (existingContact) {
//         return res
//           .status(400)
//           .json({ message: "Contact is already registered" });
//       }

//       return StudentsModel.create(req.body);
//     })
//     .then((student) => res.status(201).json(student))
//     .catch((error) => res.status(500).json({ error: error.message }));
// });

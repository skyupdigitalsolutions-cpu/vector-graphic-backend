const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const contactRoute = require("./routes/contactRoutes");
// const connectInfoRoute = require("./routes/connectInfoRoutes");
const connectNowRoute = require("./routes/connectNowRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.send("Hello from Node.js");
});

// Routes
app.use("/api/contacts", contactRoute);
// app.use("/api/connect-info", connectInfoRoute);
app.use("/api/connect-now", connectNowRoute);

// Port setup
const PORT = process.env.PORT || 3001;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err.message);
  });
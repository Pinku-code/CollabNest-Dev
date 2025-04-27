const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const geminiRoute = require("./routes/gemini");
const contactRoutes = require("./routes/contactRoutes");
const scriptRoutes = require('./routes/scripts'); // ✅ Import Script Manager routes
// const AI = require("./routes/aiEnhance"); // ✅ Import AI routes
const { gemini } = require('./utils/geminiClient'); // Adjust the path as necessary
const AIEnhance = require('./routes/aiEnhance'); // Adjust the path as necessary



dotenv.config(); // ✅ Load env variables early

const app = express();

// ✅ Connect to DB
connectDB();

// ✅ Middlewares
app.use(express.json());

// ✅ CORS config
app.use(
  cors({
    origin: ["http://localhost:5173", "https://job-tracker-tx9v.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🌟 API is running...");
});

// ✅ Routes
app.use('/api/auth', authRoutes); // ✅ Auth routes
app.use('/api/gemini', geminiRoute);
app.use('/api', contactRoutes);
app.use('/api/scripts', scriptRoutes); // ✅ Script manager routes
app.use('/api/aiEnhance', AIEnhance); // ✅ AI routes
// app.use('/api/aiEnhance', AI); // ✅ AI routes

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

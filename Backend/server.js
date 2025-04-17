const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const geminiRoute = require("./routes/gemini");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config(); // ✅ Load env variables early

const app = express();

// ✅ Connect to DB
connectDB();

// ✅ Middlewares
app.use(express.json());

// ✅ CORS config (combine instead of calling twice)
app.use(
  cors({
    origin: ["http://localhost:5173", "https://collabnest.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Basic test route
app.get("/", (req, res) => {
  res.send("🌟 API is running...");
});

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/gemini', geminiRoute);
app.use('/api', contactRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

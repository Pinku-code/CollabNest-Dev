const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(cors({ origin: "https://collab-nest-dev.vercel.app/" }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const geminiRoute = require("./routes/gemini");
app.use("/api/gemini", geminiRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

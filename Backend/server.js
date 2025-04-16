const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://collabnest.vercel.app"], // or Vercel domain if using that
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cors());
app.use(express.json());


//Test

app.get("/", (req, res) => {
    res.send("API is running...")
});

// Routes
app.use('/api/auth', authRoutes);

const geminiRoute = require("./routes/gemini");
app.use("/api/gemini", geminiRoute);

const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/skilltree";

mongoose.connect(DB_URL);


app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api", async (req, res) => {
  res.send("Welcome to the SkillTree.AI API");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

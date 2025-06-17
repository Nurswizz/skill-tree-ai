import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the SkillTree.AI API");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

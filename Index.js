import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/dbconfig.js";
import authRouter from "./Routers/user.router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to API" });
});

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

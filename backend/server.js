import authRoutes from "./routes/authRoutes.js"
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("API is running...")
})

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connect to MongoDB"))
    .catch((err) => console.log(err))


app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})
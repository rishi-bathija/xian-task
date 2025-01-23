const express = require("express");
const { dbConnect } = require("./config/db");
const userRoutes = require("./routes/User");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

dbConnect();

app.use(cors(
    {
        origin: ["http://localhost:3000", "https://xian-task-frontend.vercel.app"],
        credentials: true,
    }
));

app.use(express.json());

app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
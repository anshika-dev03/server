const express = require("express");
const app = express();

require("dotenv").config();
require("./connection/conn");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173","https://taskify-black-eta.vercel.app/",],
    credentials: true,
  })
);

const usersApi = require("./controllers/user");
const tasksApi = require("./controllers/task");

app.use(express.json());
app.use("/api/v1", usersApi);
app.use("/api/v1", tasksApi);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started : ${process.env.PORT}`);
});

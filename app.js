const express = require("express");
const task = require("./routes/task");
const app = express();
const connectDB = require("./DB/connect");
require("dotenv").config();

app.use(express.json());

app.get("/hello", function (req, res) {
  res.send("kishan yadav");
});

app.use("/api/k1/task", task);
const port = 3000;

const start = async () => {
  try {
    // console.log("process.env.MONGO_URI", process.env.MONGO_URI);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();

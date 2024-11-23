import express from "express";
import { connection } from "./db.js";
const app = express();

const port = 5000;
connection();
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Waleed");
});

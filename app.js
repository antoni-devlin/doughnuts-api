import express from "express";
import { doughnuts } from "./doughnutData.js";
const app = express();

app.get("/", (req, res) => {
  return res.send(doughnuts);
});

// app.post("/", (req, res) => {
//   return res.send("Received a POST HTTP method");
// });

// app.put("/", (req, res) => {
//   return res.send("Received a PUT HTTP method");
// });

// app.delete("/", (req, res) => {
//   return res.send("Received a DELETE HTTP method");
// });

app.listen(3000, () => console.log(`Example app listening on port port!`));

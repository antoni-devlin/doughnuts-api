import express from "express";
import { doughnuts } from "./doughnutData.js";
const app = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/", (req, res) => {
  return res.send("Server running!");
});

app.get("/doughnuts/list", (req, res) => {
  return res.send(doughnuts);
});

app.get("/doughnuts/random", (req, res) => {
  const data = doughnuts[getRandomInt(Object.keys(doughnuts).length)];
  return res.send(data);
});

app.get("/doughnuts/single", (req, res) => {
  // Iterate through the object
  for (const key in doughnuts) {
    if (doughnuts.hasOwnProperty(key)) {
      console.log(`${key}: ${doughnuts[key]}`);
    }
  }

  return res.send(data);
});

app.listen(3000, () => console.log(`Example app listening on port port!`));

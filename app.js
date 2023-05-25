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
  const randomDoughtnut = doughnuts[getRandomInt(doughnuts.length)];
  return res.send(randomDoughtnut);
});

app.get("/doughnuts/search/:searchTerm", (req, res) => {
  var results = doughnuts.filter(function (el) {
    return el.name.includes(req.params.searchTerm);
  });
  return res.send(results);
});

app.listen(3000, () => console.log(`Example app listening on port port!`));

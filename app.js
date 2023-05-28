import express from "express";
const app = express();

import { sequelize } from "./db.js";
import { Doughnut } from "./data/Doughnut.js";

// Even tho our model is an ES6 compatible class
// we should not use new to create an instance
// instead we should call the build method
async function main() {
  // The following line will sync our models
  // To the database creating them or altering the db
  // To match the new model
  await sequelize.sync({ alter: true });

  const newDoughnut = Doughnut.build({
    name: "Test doughnut",
    manufacturer: "Dunkin",
  });
  console.log(newDoughnut instanceof Doughnut); // true
  console.log(newDoughnut.title); // "Jane"

  // Our newly build instance haven't been saved
  // to the db yet, we need to call .save()
  await newDoughnut.save();
}

main();

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

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

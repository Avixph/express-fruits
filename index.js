const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./db");
const Fruit = require("./models/fruit");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the root");
});

app.get("/greet/:name", (req, res) => {
  try {
    const { name } = req.params;
    res.send(`Why hello there, ${name}. It's a pleasure to meet you!`);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.get("/five", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

app.get("/evens/:n", (req, res) => {
  try {
    const { n } = req.params;
    let evenArr = [];
    for (let i = 0; i <= parseInt(n); i++) {
      if (i % 2 === 0) {
        evenArr.push(i);
      }
    }
    res.send(evenArr);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.get("/namelength/:name", (req, res) => {
  try {
    const { name } = req.params;
    res.send(`The name ${name} has ${name.length} characters.`);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

/* ----------------fruitDatabase----------------*/

app.get("/fruits", async (req, res) => {
  const fruits = await Fruit.find();
  res.json(fruits);
});

app.get("/fruits", async (req, res) => {
  const fruits = await Fruit.find();
  res.json(fruits);
});

app.get("/fruits/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const fruits = await Fruit.find();
    const findFruitName = fruits.filter((fruit) => {
      if (fruit.name.toLowerCase() === name.toLowerCase()) {
        return fruit;
      }
    });
    if (!findFruitName) {
      throw Error("Could not find fruit.");
    }
    res.json(findFruitName);
  } catch (error) {
    console.log(error);
    res.send();
  }
});

app.get("/fruits/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fruits = await Fruit.findById(id);
    if (!fruits) {
      throw Error("Could not find fruit.");
    }
    res.json(fruits);
  } catch (error) {
    console.log(error);
    res.send();
  }
});

/* HTTP request is sent to the http://localhost:3000/
call the handler function */

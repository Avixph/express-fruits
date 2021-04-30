const db = require("../db");
const Fruit = require("../models/fruit");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const fruits = [
    {
      name: "Durian",
      imgUrl: "https://i.imgur.com/6KGw7Eo.jpg",
    },
    {
      name: "Rambutan",
      imgUrl: "https://i.imgur.com/LWu8OXr.jpg",
    },
    {
      name: "Lychee",
      imgUrl: "https://i.imgur.com/Vw3Oznh.jpg",
    },
    {
      name: "Longan",
      imgUrl: "https://i.imgur.com/tSeRwwX.jpg",
    },
    {
      name: "Jackfruit",
      imgUrl: "https://i.imgur.com/DdDDtDd.jpg",
    },
    {
      name: "Soursop",
      imgUrl: "https://i.imgur.com/Jm9ErzT.jpg",
    },
    {
      name: "Mangosteen",
      imgUrl: "https://i.imgur.com/9MAcKsF.jpg",
    },
    {
      name: "Rose Apple",
      imgUrl: "https://i.imgur.com/bdfedfL.jpg",
    },
    {
      name: "Pitaya",
      imgUrl: "https://i.imgur.com/NWIYwQU.jpg",
    },
    {
      name: "Snake Fruit",
      imgUrl: "https://i.imgur.com/C794n62.jpg",
    },
    {
      name: "Kiwi Berry",
      imgUrl: "https://i.imgur.com/fRTr9oM.jpg",
    },
    {
      name: "Buddha's Hand",
      imgUrl: "https://i.imgur.com/c892wgq.jpg",
    },
  ];

  await Fruit.insertMany(fruits);
  console.log("Created many fruits!");
};

const run = async () => {
  await main();
  db.close();
};
run();

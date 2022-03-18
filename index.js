// Import du paquet express
const express = require("express");

// Création d'une applicaion express
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
require("./database/database.js");
require("./models")(app);

app.listen(port, () => {
  console.log(
    `Votre server est bien connecter sur le port ${port} de votre PC`
  );
});
let DATE = new Date()
// console.log(DATE.toLocaleTimeString());

// console.log(DATE.getDate());

// console.log(DATE.toUTCString());
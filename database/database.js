

    const mongoose = require("mongoose");
    mongoose
    .connect(
      "mongodb://127.0.0.1:27017/Spotify",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      
    ).then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
 


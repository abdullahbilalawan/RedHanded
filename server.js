// IMPORTS
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
// MONGODB CONNECTION
var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Abdullah:babyone@cluster0.isbql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(cors())
    // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
    app.use(express.json());
    
    app.use("/api", routes); // API
    
    app.listen(5000, () => {
      console.log("LISTENING ON PORT 5000");
    });
  });

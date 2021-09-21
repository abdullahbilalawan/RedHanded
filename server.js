// IMPORTS
const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const fileuploader = require("express-fileupload")
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
    app.use(express.json());
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.use(fileuploader())
    
    
    
    app.use("/api", routes); // API
    
    app.listen(5000, () => {
      console.log("LISTENING ON PORT 5000");
    });
  });

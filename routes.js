const express = require("express");
const router = express.Router();
const Admin = require("./models/Admin");

router.post("/signUp", async (req, res) => {
  const admin = new Admin({
    Name: req.body.username,
    Email: req.body.email,
    Password: req.body.password,
  });
  admin
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
    
});

module.exports = router;

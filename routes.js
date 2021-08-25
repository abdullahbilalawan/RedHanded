const express = require("express");
const router = express.Router();
const Admin = require("./models/Admin");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("./config/auth.config");
const { authJwt } = require("./middlewares");

// REGISTER AND LOGIN ROUTES

router.post("/signUp", async (req, res) => {
  console.log(req.body)
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

router.post('/signin', async (req, res) => {
  Admin.findOne({
    Email: req.body.email
  })
    .exec((err, user) => {
      console.log(err, user);
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      
      var passwordIsValid =     req.body.password===user.Password
    
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      
      res.send({
        id: user._id,
        username: user.Name,
        email: user.Email,
        accessToken: token
      });
    });

})

// AUTHORIZATION routes

router.get("/all", (req, res) => {
  res.status(200).send("Public Content.");
});

router.get("/api/test/user", [authJwt.verifyToken], (req, res) => {
  res.status(200).send("Admin Content.");
});



module.exports = router;

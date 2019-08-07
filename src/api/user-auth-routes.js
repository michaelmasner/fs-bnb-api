const express = require("express");

const router = express.Router();

const UserAuthService = require("../services/user-auth-service");


// sending login information to database, so post method is used 
router.post("/login", (req, res) => {
  UserAuthService.prototype
    .login(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// sending register information to database, so post method is used
router.post("/register", (req, res) => {

    UserAuthService.prototype
    .register(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


module.exports = router;

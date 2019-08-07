const express = require("express");

const router = express.Router();

const User = require('../models/user-model');

router.get("/", (req, res) => {
    User.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/create", (req, res) => {
    User.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/update/:id", (req, res) => {
    User.prototype
        .updateByID(req.params.id, req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/:id", (req, res) => {
    User.prototype
        .getById(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/delete/", (req, res) => {
    User.prototype
        .remove(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;
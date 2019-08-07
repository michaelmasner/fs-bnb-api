const express = require("express");

const router = express.Router();

const Admin = require('../models/admin-model');

router.get("/", (req, res) => {
    Admin.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/create", (req, res) => {
    Admin.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/update/:id", (req, res) => {
    Admin.prototype
        .updateByID(req.params.id, req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/:id", (req, res) => {
    Admin.prototype
        .getById(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/delete/", (req, res) => {
    Admin.prototype
        .remove(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;
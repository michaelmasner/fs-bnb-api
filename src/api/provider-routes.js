const express = require("express");

const router = express.Router();

const Provider = require('../models/provider-model');

// Get all Properties
router.get("/", (req, res) => {
    Provider.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Create new Property
router.post("/create", (req, res) => {
    Provider.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Update Property by ID
router.post("/update/:id", (req, res) => {
    Provider.prototype
        .updateByID(req.params.id, req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Get Property by ID
router.get("/:id", (req, res) => {
    Provider.prototype
        .getById(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// Delete Property
router.post("/delete/", (req, res) => {
    Provider.prototype
        .remove(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;
const express = require("express");

const router = express.Router();

const Property = require('../models/property-model');

router.get("/", (req, res) => {
    Property.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/create", (req, res) => {
    Property.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/update/:id", (req, res) => {
    Property.prototype
        .updateByID(req.params.id, req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/:id", (req, res) => {
    Property.prototype
        .getById(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/providerId/:id", (req, res) => {
    Property.prototype
        .getByProviderId(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/delete/", (req, res) => {
    Property.prototype
        .remove(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });

});


module.exports = router;
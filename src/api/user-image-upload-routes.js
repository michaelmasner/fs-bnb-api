const express = require("express");

const router = express.Router();

router.post("/image/:userId", (req, res) => {
    uploadService
      .upload(req, res)
      .then(() => {
        const userId = req.params.userId;
        const url = "http://localhost:2000/uploads/" + req.file.filename;
   
        userService
          .setImageUrl(userId, url)
          .then(user => {
            res.json({ user });
          })
          .catch(err => {
            res.status(400).json({ msg: err });
          });
      })
      .catch(err => {
        res.status(400).json({ msg: err });
      });
   });
   
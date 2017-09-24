//dependencies required for multer
const db = require("../models");
const multer = require("multer");
const crypto = require("crypto");
const fs = require('fs');
const path = require("path");

//sets up storage for photo files
var storage = multer.diskStorage({
  destination: "./images",
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      cb(null, raw.toString('hex') + path.extname(file.originalname));
    });
  }
});

module.exports = function(app) {

  app.post("/api/uploadImg", storage.single('photo'), (req, res) => {
    //safety check to make sure file metadata is added.
    if(!req.file) {
      console.log("No file received");
      return res.redirect("/");
    }
    console.log("file received");
    //creates filepath to be saved in database
    var filePath = `${req.protocol}://${req.host}/${req.file.path}`;
    db.Pictures.create({
        title: filePath
    }).then(dbPicture => {
      res.json(dbPicture);
    });
  });
};

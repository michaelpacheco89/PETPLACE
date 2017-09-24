//dependencies required for multer
const db = require("../models");
const multer = require("multer");
const crypto = require("crypto");
const fs = require('fs');
const path = require("path");



module.exports = function(app) {


  //sets up storage for photo files
  var storage = multer.diskStorage({
    destination: "./images",
    //creates a new filename to be stored in a image folder.
    filename: function(req, file, cb) {
      crypto.pseudoRandomBytes(16, (err, raw) => {
       cb(null, raw.toString('hex') +
       //preserves the original extension
       path.extname(file.originalname));
      });
    }
  });

  //used to upload pics to storage
  var upload = multer({
    storage: storage
  }).single('photo');


  app.post("/api/uploadImg", function(req, res) {

    upload(req, res, function(err) {

      if(err)
      {
        console.log(err);
        return res.redirect("/")
      }

      console.log("req.file: "+req.file);
      if(!req.file) {
        console.log("No file received");
        return res.redirect("/");
      }

      console.log(req.file["photo"]);
      console.log("file received");

      //creates filepath to be saved in database
      var filePath = `./${req.file.path}`;

      db.Pictures.create({
          title: filePath
      }).then(dbPicture => {
        console.log("added to DB");
        res.json(dbPicture);
      });
    });
  });

};

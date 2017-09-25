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

  //this route will take in an image file and saved the filepath to the DB.
  //NOTE: need a way to track what pawfile is adding the picture, by default we are including the id of each pawfile, just need a way to pass that to the route in the frontend.
  app.post("/api/uploadImg/:pawfileId", (req, res) => {

    //multer object that does the work.
    upload(req, res, function(err) {
      //if there is an error stop the function.
      if(err)
      {
        console.log(err);
        return res.redirect("/")
      }
      //if there is no file stop the function.
      if(!req.file) {
        console.log("No file received");
        return res.redirect("/");
      }

      //creates filepath to be saved in database
      var filePath = `./${req.file.path}`;

      //saves filepath to database.
      db.Pictures.create({
          title: filePath,
          pawfileId: req.params.pawfileId
      }).then(dbPicture => {
        console.log("added to DB");
        res.json(dbPicture);
      });
    });
  });

  //route to retrieve the profile Pic for a pawfile
  app.get("/api/profilePic/:pawfileId", (req, res) => {
    //looks for a picture with a matching pawfileId
    //and where isProfile is true.
    //this route is intended to be used to load profile Pic
    db.Pictures.findOne({
      where: {
        pawfileId: req.params.pawfileId,
        isProfile: true
      }
    }).then(results => {
      res.json(results);
    });
  });

  // app.put("api/changeProfilePic/:pawfileId/:pic", (req, res) =>{
  //   db.Pictures.update({
  //       isProfile: false
  //     },
  //     {
  //       where: {
  //         pawfileId: req.params.pawfileId,
  //         isProfile: true
  //       }
  //     }
  //   })
  // });

};

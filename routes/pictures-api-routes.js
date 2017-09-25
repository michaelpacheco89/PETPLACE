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
      console.log(req.params.pawfileId);
      //saves filepath to database.
      db.Pictures.create({
          title: filePath,
          PawfileId: req.params.pawfileId
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
    db.Post.findOne({
      where: {
        PawfileId: req.params.pawfileId,
        isProfile: true
      }
    }).then(results => {
      res.json(results);
    });
  });

  //route to update profile picture
  app.post("api/changeProfilePic/:pawfileId/:pic", (req, res) =>{
    //first it updates the current profile picture
    //to make it not a prof pic.
    db.Post.update({
        isProfile: false
      },
      {
        where: {
          PawfileId: req.params.pawfileId,
          isProfile: true
        }
      }).then( results => {
        //then makes the new pic the prof pic
      db.Post.update({
        isProfile: true
      },
      {
        where: {
          title: req.params.pic
        }
      }).then( data => {
        res.json(data);
      });
    });
  });

  //get route for getting most recent 25 pics from database.
  //NOTE: number can be changed based on what makes sense.
  app.get("api/feedPics", (req, res) => {
    db.Post.findAll({
      order: [
        sequelize.fn(sequelize.col(id), 'DESC')
      ],
      limit: 25
    }).then(results => {
      res.json(results);
    });
  });

  //route to delete picture. I'm including pawfileId
  //and pic to make it more difficult for nefarious deletions.
  app.delete("api/deletePic/:pawfileId/:pic", (req, res) => {
    db.Post.destroy({
      where: {
        PawfileId: req.params.pawfileId,
        title: req.params.pic
      }
    }).then(results => {
      res.json(results);
    });
  });
};

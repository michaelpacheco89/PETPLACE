//dependencies required for multer
const db = require("../models");
const multer = require("multer");
const crypto = require("crypto");
const fs = require('fs');
const path = require("path");



module.exports = function(app) {

//ROUTES FOR PICTURES

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
  app.post("/api/uploadImg/", (req, res) => {

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
      db.Post.create({
          picContent: filePath,
          PawfileId: req.cookies.pawfileId
      }).then(dbPicture => {
        console.log("added to DB");
        res.json(dbPicture);
      });
    });
  });

  //route to retrieve the profile Pic for a pawfile
  app.get("/api/profilePic/", (req, res) => {
    //looks for a picture with a matching pawfileId
    //and where isProfile is true.
    //this route is intended to be used to load profile Pic
    db.Post.findOne({
      where: {
        PawfileId: req.cookies.pawfileId,
        isProfile: true
      }
    }).then(results => {
      res.json(results);
    });
  });

  //route to update profile picture
  app.post("api/changeProfilePic/:pic", (req, res) =>{
    //first it updates the current profile picture
    //to make it not a prof pic.
    db.Post.update({
        isProfile: false
      },
      {
        where: {
          PawfileId: req.cookies.pawfileId,
          isProfile: true
        }
      }).then( results => {
        //then makes the new pic the prof pic
      db.Post.update({
        isProfile: true
      },
      {
        where: {
          picContent: req.params.pic
        }
      }).then( data => {
        res.json(data);
      });
    });
  });

  //route to delete picture. I'm including pawfileId
  //and pic to make it more difficult for nefarious deletions.
  app.delete("api/deletePic/:pic", (req, res) => {
    db.Post.destroy({
      where: {
        PawfileId: req.cookies.pawfileId,
        picContent: req.params.pic
      }
    }).then(results => {
      res.json(results);
    });
  });


  //ROUTES FOR TEXT POSTS

  //route for making and sending new text post to db
  app.post("/api/sendTextPost/", (req, res) => {
      //req.body.post should be content of post.
      db.Post.create({
          textContent: req.body.post,
          PawfileId: req.cookies.pawfileId
      }).then(dbPost => {
        console.log("added to DB");
        res.json(dbPost);
      });
    });
  });

  //route to update text post
  app.put("/api/changeProfilePic/:postId", (req, res) =>{
    //req.body.post should be updated text post content
    db.Post.update({
        textContent: req.body.post
      },
      {
        where: {
          PawfileId: req.cookies.pawfileId,
          id: req.params.postId
        }
      }).then(results => {
        res.json(data);
    });
  });

  //route to remove text post.
  app.delete("/api/deleteText/:postId", (req, res) => {
    db.Post.destroy({
      where: {
        PawfileId: req.cookies.pawfileId,
        textContent: req.params.postId
      }
    }).then(results => {
      res.json(results);
    });
  });

  //get route for getting most recent 25 posts from database.
  //NOTE: number can be changed based on what makes sense.
  app.get("/api/feed", (req, res) => {
    db.Post.findAll({
      include: [db.Pawfile],
      order: [
        sequelize.fn(sequelize.col(id), 'DESC')
      ],
      limit: 25
    }).then(results => {
      res.json(results);
    });
  });

  //get route intended to get all posts for an individual pawfile
  app.get("/api/userFeed/:pawfileId", (req, res) => {
    db.Pawfile.findAll({
      include: [db.Post],
      where: {
        id: req.params.pawfileId
      }
    }).then(results =>
      {
        res.json(results);
      });
  });

  //route to load comments on an individual post.
  app.get("/api/getComments/:postId", (req, res) => {
    db.Post.findAll({
      include: [{
        model: db.Comments,
        include: [{
          model: db.Pawfile
        }]
      }],
      where: {
        id: req.params.postId
      }
    }).then(results => {
      res.json(results);
    });
  });

  //route to create a comment on a post.
  //req.body.comment should be the text of the commment
  app.post("/api/createComment/:postId",(req, res) => {
    db.Comments.create({
      // names may need to be changed dependent on comment model.
      //text content
      title: req.body.comment,
      //post that comment belongs to.
      postId: req.params.postId,
      //creator of comment.
      PawfileId: req.cookies.pawfileId
    }).then(results => {
      res.json(results);
    });
  });

};
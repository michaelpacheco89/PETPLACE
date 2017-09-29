var db = require("../models");
const multer = require("multer");
const crypto = require("crypto");
const fs = require('fs');
const path = require("path");


var storage = multer.diskStorage({
  destination: "./public/assets/images",
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

// pawfile take in a name, species, breed, sex, age
module.exports = function(app) {
  //find ALL user's pawfiles
  app.get("/api/pawfiles", function(req,res){
    db.Pawfile.findAll({
      include:[{
        model: db.Posts}]
    }).then(function(data){
      console.log(data);
      res.json(data);
    });
  });

  //route for finding all of a single user's pawfiles
  app.get("/api/user/pawfiles/", (req, res)=> {
    console.log(req.cookies.UserId);
    db.Pawfile.findAll({
      include:[{model:db.Post}],
      where:{
        UserId: req.cookies.UserId
      }
    }).then(data => {
      res.json(data)
    });
  });

//find ONE pawfile
app.get("/api/pawfiles/:id",function(req,res){
  db.Pawfile.findOne({
    include:[{model: db.Post}],
    where:{
      id:req.params.id
    }
  }).then(function(data){
    res.json(data);
  });
});

//sets cookie for pawfile
app.get("/api/setCookie/:id", (req, res) => {
  db.Pawfile.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.clearCookie("pawfileId");
    res.cookie("pawfileId", data.id);
    res.end();
  });
});

// post route for creating NEW Pawfile
app.post("/api/pawfile/", function(req,res){
  console.log(req.body);
  db.Pawfile.create({
    name: req.body.name,
    species: req.body.species,
    breed: req.body.breed,
    sex: req.body.sex,
    age: req.body.age,
    UserId: req.cookies.UserId
  }).then(function(data){
    res.clearCookie("pawfileId");
    res.cookie("pawfileId", data.id);
    res.json(data);
  });
});

//route to add profile picture to pawfiles
app.post("/api/profPic/:id", (req, res) => {

  upload(req, res, function(err) {
    //if there is an error stop the function.
    if(err)
    {
      console.log(err);
      return res.redirect("/");
    }
    //if there is no file stop the function.
    if(!req.file) {
      console.log("No file received");
      return res.redirect("/");
    }

    //creates filepath to be saved in database
    var filePath = `${req.file.path}`;
    var correctFilePath = filePath.replace("public", "");

    db.Pawfile.update({
      profPic: correctFilePath
    },
    {
      where: {
          id: req.params.id
      }
    }).then(results => {
      res.json(results);
    });
  });
});


// DELETE route to delete pawfiles
app.delete("/api/pawfiles/:id",function(data){
  db.Pawfile.destroy({
    where:{
      id: req.params.id
    }
  }).then(function(data){
    res.json(data);
  });
});

// route for UPDATING pawfiles
app.put("/api/pawfiles",function(req,res){
  db.Pawfile.update(req.body,{
    where:{
      id: req.body.id
    }
  }).then(function(data){
    res.json(data);
  });
});

};

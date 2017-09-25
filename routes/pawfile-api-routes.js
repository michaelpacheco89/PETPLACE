var db = require("../models");

// pawfile take in a name, species, breed, sex, age
module.exports = function(app) {
  //find ALL user's pawfiles
  app.get("/api/pawfiles", function(req,res){
    db.Pawfile.findAll({
      include:[{
        model: db.Pictures,
        as: "OwnedPics"
      }]
    }).then(function(data){
      res.json(data);
    });
  });

//find ONE pawfile
app.get("/api/pawfiles/:id",function(req,res){
  db.Pawfile.findOne({
    where:{
      id:req.params.id
    }
  }).then(function(data){
    res.json(data);
  });
});

// post route for creating NEW Pawfile
app.post("/api/pawfile", function(req,res){
  db.Pawfile.create({
    name: req.body.name,
    species: req.body.species,
    breed: req.body.breed,
    sex: req.body.sex,
    age: req.body.age
  }).then(function(data){
    res.json(data);
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

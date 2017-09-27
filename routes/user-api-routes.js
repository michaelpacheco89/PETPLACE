var db = require("../models");
var bcrypt = require("bcryptjs");

module.exports = function(app) {
//API route for getting ALL users
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      // where:{
      //   isShelter:false
      // },
      include: [{
        model: db.Pawfile,

      }]

    }).then(function(data) {
          return res.json(data);
    });
  });

// API routes for getting ALL shelters
app.get("/api/shelters", function(req, res) {
  db.User.findAll({
    where:{
      isShelter:true
    },
    include: [{
      model: db.Pawfile
    }]
  }).then(function(data) {
        return res.json(data);
  });
});

// API route to find user by id(optional)
app.get("/api/users/:id", function(req, res) {
  //checking to see if username exists for signup
  var query = {};
  // console.log(req.query.username);
  if (req.query.username || req.query.email) {
    query = req.query;
  } else {
    query.id = req.params.id;
  }
  db.User.findOne({
    where: query && {
      isShelter:false
    },
    include: [{
      model: db.Pawfile
    }]
  }).then(function(data) {
    res.json(data);
  });
});

// API route to find shelter by id(optional)
app.get("/api/shelters/:id", function(req, res) {
  //checking to see if username exists for signup
  var query = {};
  // console.log(req.query.username);
  if (req.query.name || req.query.email) {
    query = req.query;
  } else {
    query.id = req.params.id;
  }
  db.User.findOne({
    where: query && {
      isShelter:true
    },
    include: [{
      model: db.Pawfile
    }]
  }).then(function(data) {
    res.json(data);
  });
});

// API route to validate password on user logins
app.post("/api/user/login", function(req, res) {
  console.log("req body: "+req.body);
  db.User.findOne({where: {
    email: req.body.email
  }
  }).then(function(data) {
    console.log("data from db:"+data);
    if (data === null) {
      res.json({email: true});
    }
    else if(bcrypt.compareSync(req.body.password, data.password))
    {
      console.log("I should create a cookie");
      res.clearCookie("UserId");
      res.cookie("UserId", data.id);
      res.redirect("/");
    }
  });
});

// // API route to validate password on SHELTER logins
// app.post("/api/shelter/login", function(req, res) {
//   var query = req.query;
//   db.User.findOne({where: query}).then(function(data) {
//     if (data == null) {
//       res.json({name: true});
//     } else {
//       res.cookie("userId", data.id);
//       res.json({
//         password: bcrypt.compareSync(req.body.password, data.password),
//         id: data.id
//       });
//     }
//   });
// });

// API route to create NEW User
app.post("/api/users", function(req, res) {
    db.User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }).then(function(dbUser) {
        res.cookie("userId", dbUser.id);
        res.json(dbUser);
    });
});

// API route to create NEW Shelter
app.post("/api/shelters", function(req, res) {
    db.User.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        isShelter:true
    }).then(function(dbShelter) {
        res.json(dbShelter);
    });
});

// to delete user by id
app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbUser) {
        res.json(dbUser);
    });
});
};

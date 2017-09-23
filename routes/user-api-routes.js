var db = require("../models");
var bcrypt = require("bcryptjs");

module.exports = function(app) {

//API route for getting ALL users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(data) {
      res.json(data);
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
  db.User.findOne({where: query}).then(function(data) {
    res.json(data);
  });
});

// API route to validate password on user logins
app.post("/api/users/login", function(req, res) {
  var query = req.query;
  db.User.findOne({where: query}).then(function(data) {
    if (data == null) {
      res.json({username: true});
    } else {
      res.json({
        password: bcrypt.compareSync(req.body.password, data.password),
        id: data.id
      });
    }
  });
});

// API route to create NEW User
// to create new user
app.post("/api/users", function(req, res) {
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }).then(function(dbUser) {
        res.json(dbUser);
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

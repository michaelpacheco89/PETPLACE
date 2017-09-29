// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var socket = require("socket.io");
var cookieParser = require('cookie-parser');

// Setting up Express app
// =====================================
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up server for sockets
var server = require('http').Server(app);
var io = socket(server);

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
// app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
//app.use("/", routes);
    // PUT ROUTES IN HERE
require("./routes/user-api-routes")(app);
require("./routes/posts-api-routes")(app);
require("./routes/pawfile-api-routes")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync().then(function() {
    //{force:true} goes inside sync()

        // app.listen(PORT, function() {
        //     console.log("App listening on PORT " + PORT);
        //   });
        server.listen(PORT, function() {
            console.log('Server listening on PORT: ', PORT);
        });
    });

// SOCKET IO CONNECTIONS
// ==================================================

  // SOCKET STUFF IN HERE

// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;
var hashHistory = router.hashHistory;

// Reference the high-level components
var Main = require("../components/Main.js");
import Login from "../components/Login";

var Profile = require("../components/Profile");
var Pawfile = require("../components/Pawfile");
var Shelters = require("../components/Shelters");
var Mappy = require("../components/Map");
var Home = require("../components/Home");

import Signup from "../components/signup.js";
import ShelterSignup from "../components/shelsignup.js";

var MuiThemeProvider = require("material-ui/styles").MuiThemeProvider;
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <MuiThemeProvider>
  <Router history={hashHistory}>
    {/* ===============sign up and log in routes============= */}
    <Route path="/loginPage" component={Login} />
    <Route path= "/user/signup" component={Signup} />
    <Route path= "/shelter/signup" component={ShelterSignup} />
    {/* ======================================================= */}
    <Route path="/" component={Main}>
        <Route path="/profile" component={Profile} />
        <Route path="/pawfile" component={Pawfile} />
        <Route path="/shelters" component={Shelters} />
        <Route path="/map" component={Mappy} />
        <IndexRoute component={Home} />
        </Route>

  </Router>
  </MuiThemeProvider>
);

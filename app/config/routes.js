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
import makePawfile from "../components/makePawfile";
var Profile = require("../components/Profile");
var Shelters = require("../components/Shelters");
var Mappy = require("../components/Map");
var Home = require("../components/Home");




var MuiThemeProvider = require("material-ui/styles").MuiThemeProvider;
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <MuiThemeProvider>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="/profile" component={Profile} />
        <Route path="/pawfile/create" component={makePawfile} />
        <Route path="/shelters" component={Shelters} />
        <Route path="/map" component={Mappy} />
        <Route path="/login" component={Login} />
        <IndexRoute component={Home} />
        </Route>

  </Router>
  </MuiThemeProvider>
);

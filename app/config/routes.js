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

var MuiThemeProvider = require("material-ui/styles").MuiThemeProvider;
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <MuiThemeProvider>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>
  </MuiThemeProvider>
);

// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;



var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");
import NavBar from "../components/Navbar.js";
// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
        <div>
            <Post />
        </div>

    );
  }
});

// Export the module back to the route
module.exports = Main;

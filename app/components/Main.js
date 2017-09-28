// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;


import NavBar from "../components/Navbar.js";
// Create the Main component
var Main = React.createClass({
  getInitialState: function() {
      return {

      };
  },
  componentDidUpdate: function() {
  },

  render: function() {

    return (
        <div>
            {/* <!-- HEADER --> */}
            <div className="parallax-container">
                <div className="parallax"><img src="assets/images/tracks.jpg" /></div>
                <h1 className="header">herdIt<i className="material-icons">pets</i></h1>
            </div>

            {/* <!-- BODY --> */}
            <div className="row section white">
                <NavBar />
                <div className="col l10">
                    {this.props.children}
                </div>
            </div>
            {/* <!-- PARALLAX AND FOOTER --> */}
            <div className="parallax-container">
                <div className="parallax"><img src="assets/images/tracks.jpg" /></div>
            </div>

            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                    © 2017 Copyright herdIt
                    </div>
                </div>
            </footer>
            {/* <!-- END PARALLAX AND FOOTER --> */}
        </div>

    );
  }
});

// Export the module back to the route
module.exports = Main;

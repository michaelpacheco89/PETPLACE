// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;



var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");
import Sidebar from "../components/Sidebar.js";
// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
        <div>
            {/* <!-- HEADER --> */}
            <div className="parallax-container">
                <div className="parallax"><img src="assets/images/tracks.jpg" /></div>
                <h2 className="header">SCATCHAT<i className="material-icons">pets</i></h2>
            </div>

            {/* <!-- BODY --> */}
            <div className="row section white">
                <Sidebar />
                <Submit />
                <Post />
            </div>
            {/* <!-- PARALLAX AND FOOTER --> */}
            <div className="parallax-container">
                <div className="parallax"><img src="assets/images/tracks.jpg" /></div>
            </div>

            <footer className="page-footer">
                <div className="container">
                    <div className="row"> CONTENT TBD
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                    © 2017 Copyright ScatChat
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

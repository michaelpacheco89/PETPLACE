var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";


var Profile = React.createClass({
    getInitialState: function() {
        return {
          
        }
    },
    componentWillMount: function() {
      helper.findUserPawfiles().then(data => {
        console.log(data);
      });
    },

    componentDidUpdate: function() {

    },

    //this handles a pawfile being set as active.
    handleClick: function() {

    },

    render: function() {

        return (
        <div className="outerdiv">
            <div className="row">
                <Link to="/pawfile"><div className=" pawcard col l2 s12 offset-s1">
                    <div className="card">
                        <div className="card-image">
                            <img src="assets/images/cat1.jpg" />
                            <span className="card-title">Pawfile #1</span>
                        </div>
                        <div className="card-content">
                            <button className="btn">Active</button>
                            <button className="btn">View</button>
                        </div>
                    </div>
                </div></Link>

                <Link to="/pawfile"><div className=" pawcard col l2 s12 offset-s1">
                    <div className="card">
                        <div className="card-image">
                            <img src="assets/images/cat1.jpg" />
                            <span className="card-title">Pawfile #2</span>
                        </div>
                        <div className="card-content">
                            <button className="btn">Active</button>
                            <button className="btn">View</button>
                        </div>
                    </div>
                </div></Link>
            </div>

            <div className="userprofholder col s10 offset-s2">
                Username:
                other info here
            </div>

        </div>
        );
    }
});


module.exports = Profile;

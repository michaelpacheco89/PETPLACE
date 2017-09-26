var React = require("react");
var Link = require("react-router").Link;


var Profile = React.createClass({
    getInitialState: function() {
        return {

        }
    },
    componentDidMount: function() {

    },

    componentDidUpdate: function() {

    },

    render: function() {
        return (
            <div className="row">
                <div className=" pawcard col m2">
                    <div className="card">
                        <div className="card-image">
                            <img src="assets/images/cat1.jpg" />
                            <span className="card-title">Pawfile #1</span>
                        </div>
                        <div className="card-content">
                            <a className="btn">Active</a>
                            <a className="btn">View</a>
                        </div>
                    </div>
                </div>

                <div className=" pawcard col m2">
                    <div className="card">
                        <div className="card-image">
                            <img src="assets/images/cat1.jpg" />
                            <span className="card-title">Pawfile #2</span>
                        </div>
                        <div className="card-content">
                            <a className="btn">Active</a>
                            <a className="btn">View</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Profile;

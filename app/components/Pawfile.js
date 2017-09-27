var React = require("react");
var Link = require("react-router").Link;


var Pawfile = React.createClass({
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
            <div className="pawprofholder col s10 offset-s2">
                <Link to="/profile"><button className="btn"> Back to Profile </button></Link>
                Pet Name:
                other info here
            </div>
        );
    }
});


module.exports = Pawfile;

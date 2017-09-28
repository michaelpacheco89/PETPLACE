var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";

var Pawfile = React.createClass({
    getInitialState: function() {
        return {
          data: []
        }
    },
    componentWillMount: function() {
      //need to pass a prop from profile that has pawfileId inside.
      helper.getPawfileFeed(this.props.id).then( results => {
        console.log(results);
        this.setState({data: results.data});
      });
    },

    renderPawfile: function() {
      //here we should use a map from the helper to load the pawfile posts and stuff.
      this.state.data.map(item => {

      });
    },

    componentDidUpdate: function() {

    },

    render: function() {
      //should return {this.renderPawfile} here.
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

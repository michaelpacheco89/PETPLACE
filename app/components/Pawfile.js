var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";

var Pawfile = React.createClass({
    getInitialState: function() {
        return {
          data: [],

        }
    },
    componentWillMount: function() {
        console.log(this.state);
      //need to pass a prop from profile that has pawfileId inside.
      helper.getPawfileFeed(this.props.id).then(results => {
        console.log(results);
        this.setState({data: results.data});
      });

    },

    componentDidUpdate: function() {

    },

    render: function() {
      //should return {this.renderPawfile} here.
        return (
            <div className="pawprofholder col s10 offset-s2">
                <Link to="/profile"><button className="btn"> Back to Profile </button></Link>\
                {this.state.data.map(item => (
                    <div key={item.id} className="row">
                        <h3> User Info </h3>
                        <h4>Username</h4><hr /> <h5>{item.name}</h5>
                        <h4>Name</h4><hr />     <h5>{item.name}</h5>
                        <h4>Email</h4><hr />    <h5>{item.name}</h5>
                    </div>
                ))}

            </div>
        );
    }
});


module.exports = Pawfile;

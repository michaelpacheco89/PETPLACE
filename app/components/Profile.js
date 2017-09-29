var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";
var Pawfile = require("../components/Pawfile");


var Profile = React.createClass({
    getInitialState: function() {
        return {
          pawfiles: [],
          user: [],
          shelter: []
        }
    },
    componentWillMount: function() {
      helper.findUserPawfiles().then(result => {
        this.setState({pawfiles: result.data});
        console.log(this.state.pawfiles);
      });
      helper.getUser().then(result => {
        this.setState({user: result.data});
        console.log(this.state.user);
      });
      helper.getShelter().then(result => {
        this.setState({shelter: result.data});
        console.log(this.state.shelter);
      });
      console.log(this.state.user);
    },

    componentDidUpdate: function() {

    },



    //this handles a pawfile being set as active.
    handleClick: function(key) {
      helper.setCookie(key).then(results => {
        console.log(results);
      });
    },

    render: function() {
        return (
            <div>
                <div className="row">

                <h3> User's Pawfiles </h3>
                <Pawfile pawfiles={this.state.pawfiles} />

                <div>
                    <Link to="/pawfile/create"><div className="col s3 pawcard">
                        <div className="card">
                            <div className="card-image">
                                <span><i className="material-icons large">add</i></span>
                            </div>
                            <div className="card-content">
                                <span className="card-title">Create new Pawfile</span>
                            </div>
                        </div>
                    </div></Link>
                </div>

                </div>
                <hr />

                <div key={this.state.user.id} className="row">
                    <h3> User Info </h3>
                    <h4>Username</h4><hr /> <h5>{this.state.user.username}</h5>
                    <h4>Name</h4><hr />     <h5>{this.state.user.name}</h5>
                    <h4>Email</h4><hr />    <h5>{this.state.user.email}</h5>
                </div>


        </div>
        );
    }
});


module.exports = Profile;

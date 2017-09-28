var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";


var Profile = React.createClass({
    getInitialState: function() {
        return {
          pawfiles: [],
          user: []
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
      })
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
                {this.props.childre}
                {/* {this.state.pawfiles.map(item => (
                    <div className="col s3" key={item.id}>
                        <div className="pawcard">
                            <div className="card">
                                <div className="card-image">
                                    <img src={item.profPic} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">{item.name}</span>
                                    <button className="btn" key={item.id} onClick={this.handleClick(item.id)}>Active</button>
                                    <Link to="/pawfile/"><button className="btn">View</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}

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

        {this.state.user.map(item => (
            <div key={item.id} className="row">
                <h3> User Info </h3>
                <h4>Username</h4><hr /> <h5>{item.username}</h5>
                <h4>Name</h4><hr />     <h5>{item.name}</h5>
                <h4>Email</h4><hr />    <h5>{item.email}</h5>
            </div>
        ))}

        </div>
        );
    }
});


module.exports = Profile;

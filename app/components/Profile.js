var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";


var Profile = React.createClass({
    getInitialState: function() {
        return {
          pawfiles: []
        }
    },
    componentWillMount: function() {
      helper.findUserPawfiles().then(result => {
        this.setState({pawfiles: result.data});
        console.log(this.state.pawfiles);
      });
    },

    componentDidUpdate: function() {

    },

    renderPawfile: function() {
      this.state.pawfiles.map(item => {
        <Link to="/pawfile"><div className=" pawcard col l2 s12 offset-s1">
            <div className="card">
                <div className="card-image">
                    {/* add image here */}
                    <img src="assets/images/cat1.jpg" />
                    <span className="card-title">{item.name}</span>
                </div>
                <div className="card-content">
                    <button className="btn" key={item.id} onClick={this.handleClick}>Active</button>
                    <button className="btn">View</button>
                </div>
            </div>
        </div></Link>
      });
    },

    //this handles a pawfile being set as active.
    handleClick: function() {
      helper.setCookie(/*put key from button here*/).then(results => {
        console.log(results);
      });
    },

    render: function() {
        return (
            <div className="col s12 l4">
                {this.state.data.map(item => (
                    <div key={item.key}>
                        <Link to="/pawfile"><div className="pawcard">
                            <div className="card">
                                <div className="card-image">
                                    <img src={item.img} />    
                                </div>
                                <div className="card-content">
                                    <span className="card-title">{item.name}</span>
                                    <button className="btn">Active</button>
                                    <button className="btn">View</button>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                ))}


            <div className="userprofholder">
                Username:
                other info here
            </div>

        </div>
        );
    }
});


module.exports = Profile;

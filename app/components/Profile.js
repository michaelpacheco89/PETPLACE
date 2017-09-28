var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";


var Profile = React.createClass({
    getInitialState: function() {
        return {
            data: [
                {
                    key: 0,
                    img: "assets/images/cat1.jpg",
                    name: "Fluffy",
                    active: true
                },
                {
                    key: 1,
                    img: "assets/images/pig1.jpg",
                    name: "Chris P. Bacon",
                    active: false

                }
            ]

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

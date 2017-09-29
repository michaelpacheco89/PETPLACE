var React = require("react");
var Link = require("react-router").Link;
import helper from "../config/helper";

var Pawfile = React.createClass({
    getInitialState: function() {
        return {


        }
    },
    componentWillMount: function() {
        console.log(this.props.pawfiles);

    },

    handleClick: function() {

    },

    render: function() {
        return (
        <div>
            {this.props.pawfiles.map(item => {
                return (
                    <div className="col s3" key={item.id}>
                        <div className="pawcard">
                            <div className="card">
                                <div className="card-image">
                                    <img src={item.profPic} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">{item.name}</span>
                                        <ul>
                                            <li>Species: {item.species}</li>
                                            <li>Breed: {item.breed}</li>
                                            <li>Gender: {item.sex}</li>
                                            <li>Age: {item.age}</li>
                                        </ul>
                                    {document.cookie.pawfileid === item.id ? (<button className="btn" key={item.id} onClick={() => helper.setCookie(item.id).then(results => {
                                      console.log("why? "+results);
                                    })}>Active</button>)
                                    :
                                    (<button className="btn" key={item.id} onClick={() => helper.setCookie(item.id).then(results => {
                                      console.log("why? "+results);
                                    })}>Set Active</button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        );
    }
});


module.exports = Pawfile;

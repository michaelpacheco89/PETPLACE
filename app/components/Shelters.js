// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
import helper from "../config/helper";


var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");
import NavBar from "../components/Navbar.js";
// Create the Main component
var Main = React.createClass({
    getInitialState: function() {
        return {
            data: []
        }
    },
    componentWillMount: function() {
    helper.getShelterFeed().then(results => {
        console.log(results.data);
        this.setState({data: results.data});
    })
    },

    render: function() {

    return (
        <div className="col s12 l8 offset-l2">
            {this.state.data.map(item => (
               // use item.id which is the postId
                 <div key={item.id} className="post">
                     <div className="card">
                         <div className="card-header activator">
                            {item.Pawfiles[0].profPic ?
                            (<img src={item.Pawfile[0].profPic} className="avatar circle" />)
                            :
                            (<img src="/assets/images/anon.jpg" className="avatar circle" />)
                            }
                            {item.Pawfiles[0].name}
                         </div>

                         <div className="card-image">

                             <img src={item.picContent} />
                             {item.likes ?
                                  (<a href="#" onClick={this.likeClick} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite</i></a>)
                                  :
                                  (<a href="#" onClick={this.likeClick} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite_border</i></a>)}
                         </div>

                         <div className="card-content">

                             <span className="btn btn-floating waves-effect waves-light comment-btn activator"><i className="material-icons right">more_vert</i></span>
                             <p>{item.textContent}</p>


                         </div>

                         <div className="card-reveal">
                             <span className="card-title grey-text text-darken-4">Comments<i className="material-icons right">close</i></span>
                             <p>{item.textContent}</p>
                         </div>
                     </div>
                 </div>
            ))}
        </div>

    );
  }
});

// Export the module back to the route
module.exports = Main;

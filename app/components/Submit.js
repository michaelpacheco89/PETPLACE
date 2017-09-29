// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
import helper from "../config/helper";
// Create the Main component
var Submit = React.createClass({
    getInitialState: function() {
      return {
        message: ""
      };
    },

    handleChange: function(event) {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
      //console.log(this.state.message);
      //console.log(this.state.photo);
    },

    handleSubmit: function(event) {
        event.preventDefault();
        //console.log("pushed the button");
        //console.log(this.state.photo);
        //console.log(this.state.message);
        if(this.state.message !== "" && this.state.photo !== "")
        {
          //make a new route that adds text and photo at same time.
        }
        else if(this.state.message !== "")
        {
            helper.addPost(this.state.message).then(data => {
              //console.log(data);
            });
        }
        //else if(this.state.photo !== "")
        //{
          var picData = new FormData();
          var file = document.getElementById("file").files[0];
          //console.log(file);
          // this.setState({photo: new FormData().set('photo', file)});
          picData.set('photo', file);
          //console.log(picData.get("photo"));
          helper.addPic(picData).then(data => {
          //console.log(data);
          });
        //}
        //this.setState({message: "", file: new FormData()});
    },

    componentDidUpdate: function() {

    },

    render: function() {

    return (
            <div className="submit col s12 l8 offset-l2">
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" action="api/uploadImg/" method="POST">
                    <div>
                        <div className="input-field">
                            <input id="message" type="text" value={this.state.message} onChange={this.handleChange} />
                            <label htmlFor="message">What's Up?</label>
                        </div>
                    </div>

                    <div className="file-field input-field">
                        <div className="btn btn-floating">
                            <span><i className="material-icons">add</i></span>
                            <input id='file' name="photo" type="file" />
                        </div>

                        <div className="file-path-wrapper">
                            <input id="photo" className="file-path validate" type="text" />
                            <label htmlFor="photo"> Add a Photo</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn submit-btn">Submit</button>
                    </div>
                </form>
            </div>
    );
  }
});

// Export the module back to the route
module.exports = Submit;

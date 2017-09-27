// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Submit = React.createClass({
    getInitialState: function() {
      return {
        message: "",
        file: ""
      };
    },

    handleChange: function(event) {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },

    handleSubmit: function(event) {
        event.preventDefault();
        //console.log(this.state);
        this.setState({message: "", file: ""});
    },

    componentDidUpdate: function() {

    },

    render: function() {

    return (

            <div className="submit col s12 m5 offset-m2">
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" action="api/uploadImg/" method="POST">
                    <div>
                        <div className="input-field">
                            <input id="message" type="text" value={this.state.search} onChange={this.handleChange} />
                            <label htmlFor="message">What's Up?</label>
                        </div>
                    </div>

                    <div className="file-field input-field">
                        <div className="btn">
                            <span><i className="material-icons">add</i></span>
                            <input name="photo" type="file" />
                        </div>

                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>

    );
  }
});

// Export the module back to the route
module.exports = Submit;

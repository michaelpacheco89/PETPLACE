// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Submit = React.createClass({

  render: function() {

    return (
        <div className="col s12 m9 l9">
            <div className="submit">
                <form action="#">
                    <div className="row">
                        <div className="input-field">
                            <input id="message" type="text" className="validate" />
                            <label htmlFor="message">What's Up?</label>
                        </div>
                    </div>

                    <div className="file-field input-field">
                        <div className="btn">
                            <span><i className="material-icons">add</i></span>
                            <input type="file" />
                        </div>

                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
  }
});

// Export the module back to the route
module.exports = Submit;

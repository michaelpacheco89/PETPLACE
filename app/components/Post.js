var React = require("react");
var materialUI = require("material-ui");
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


var Post = React.createClass({

    render: function() {
        return (
            <div className="post col s12 m9 l9">
                <div className="card">
                    <div className="card-image">
                        <img src="assets/images/cat1.jpg" />
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Post;

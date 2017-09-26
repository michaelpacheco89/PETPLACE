var React = require("react");

var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");

var Home = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        }
    },
    componentDidMount: function() {
        //console.log(this.state.liked);
    },

    componentDidUpdate: function() {
        //console.log(this.state.liked);
    },

    render: function() {
        return (
            <div>
                <Submit />
                <Post />
            </div>
        );
    }
});


module.exports = Home;

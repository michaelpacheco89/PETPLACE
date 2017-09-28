var React = require("react");

var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");

var Home = React.createClass({
    getInitialState: function() {
        return {
            // api call to database to pull data of posts and set as state
            data: [
                {
                    key: 0,
                    img: "assets/images/cat1.jpg",
                    text: "this is the first post",
                    liked: false
                },
                {
                    key: 1,
                    img: "assets/images/pig1.jpg",
                    text: "here is another post wooo ya",
                    liked: false
                }
            ]
        }
    },
    likeToggle: function(like, key) {
        this.setState({liked: like});
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
                <Post setParent={this.likeToggle} data={this.state.data} />
            </div>
        );
    }
});


module.exports = Home;

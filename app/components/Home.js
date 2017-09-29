var React = require("react");

var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");
import helper from "../config/helper";
var Home = React.createClass({
    getInitialState: function() {
        return {
            // api call to database to pull data of posts and set as state
            data: []
        }
    },
    likeToggle: function(like, key) {
        this.setState({liked: like});
    },

    componentWillMount: function() {
        console.log(this.state.liked);
        helper.getFeed().then(results => {
          console.log(results.data);
          this.setState({data: results.data});
          //at this point should map data.data to posts. data.data holds objects, each object should be one post. Each object holds the necessary pawfile info to display picture and Name.
        });
    },

    componentDidUpdate: function() {

    },
    refreshFeed: function(){
        helper.getFeed().then(results => {
          console.log(results.data);
          this.setState({data: results.data});
        });
    },

    render: function() {
        return (
            <div>
                <Submit setParent={this.refreshFeed} />
                <Post data={this.state.data} />
            </div>
        );
    }
});


module.exports = Home;

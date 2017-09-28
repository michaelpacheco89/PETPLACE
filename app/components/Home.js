var React = require("react");

var Post = require("../components/Post.js");
var Submit = require("../components/Submit.js");
import helper from "../config/helper";
var Home = React.createClass({
    getInitialState: function() {
        return {
            // api call to database to pull data of posts and set as state
            data: [
                // {
                //     key: 0,
                //     img: "assets/images/cat1.jpg",
                //     text: "this is the first post",
                //     liked: false
                // },
                // {
                //     key: 1,
                //     img: "assets/images/cat1.jpg",
                //     text: "here is another post wooo ya",
                //     liked: false
                // }
            ]
        }
    },
    likeToggle: function(like, key) {
        this.setState({liked: like});
    },

    componentWillMount: function() {
        //console.log(this.state.liked);
        helper.getFeed().then(results => {
          console.log(results.data);
          this.setState({data: results.data});
          //at this point should map data.data to posts. data.data holds objects, each object should be one post. Each object holds the necessary pawfile info to display picture and Name.
        });
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

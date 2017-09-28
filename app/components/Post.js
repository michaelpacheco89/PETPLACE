var React = require("react");

var Post = React.createClass({
    getInitialState: function() {
        return {
            //liked: false
        }
    },
    componentDidMount: function() {

    },

    componentDidUpdate: function() {
        console.log(this.props);
    },

    likeClick: function(event) {
        event.preventDefault();
        var like = !this.props.data.liked;
        // this.setState({liked: !this.state.liked});
        this.props.setParent(like, this.props.key);
    },

    render: function() {
        return (
            <div className="col offset-s4">
                {this.props.data.map(item => (

                  // use item.id which is the postId
                     <div key={item.id} className="post col s12 m8">
                         <div className="card">
                             <div className="card-header">
                                <img src="assets/images/cat1.jp" className="avatar circle" />
                             </div>
                             <div className="card-image">
                                 {/* pull image source from this.props.data */}
                                 <img src={item.picContent} />
                                 {item.likes ? (<a href="#" onClick={this.likeClick} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite</i></a>) : (<a href="#" onClick={this.likeClick} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite_border</i></a>)}
                             </div>
                             <div className="card-content">
                                 <p>{item.textContent}</p>

                             </div>
                             <div>
                                 {/* comments area */}
                             </div>
                         </div>
                     </div>
                ))}
            </div>
        );
    }
});

module.exports = Post;

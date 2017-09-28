var React = require("react");

var Post = React.createClass({
    componentDidMount: function() {

    },

    componentDidUpdate: function() {

    },

    likeClick: function(event) {
        event.preventDefault();
        var like = !this.props.data.liked;
        // this.setState({liked: !this.state.liked});
        this.props.setParent(like, this.props.key);
    },

    render: function() {
        return (
            <div className="col s12 l8 offset-l2">
                {this.props.data.map(item => (
                   // use item.id which is the postId
                     <div key={item.id} className="post">
                         <div className="card">
                             <div className="card-header activator">
                                {item.Pawfile.profPic ?
                                (<img src={item.Pawfile.profPic} className="avatar circle" />)
                                :
                                (<img src="/assets/images/anon.jpg" className="avatar circle" />)
                                }
                             </div>

                             <div className="card-image">

                                 {/* pull image source from this.props.data */}
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

module.exports = Post;

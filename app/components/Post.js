var React = require("react");
var materialUI = require("material-ui");
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var Post = () => (
<div className="post col s12 m9 l9">
    <materialUI.Card>
        <materialUI.CardHeader title="User Name" avatar="assets/images/cat1.jpg"/>

        <materialUI.CardMedia>
            <img src="assets/images/cat1.jpg" alt="img" />
        </materialUI.CardMedia>

        <materialUI.CardActions>
            <materialUI.FlatButton label="Like" />
        </materialUI.CardActions>

        <materialUI.CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </materialUI.CardText>
    </materialUI.Card>
</div>
);

module.exports = Post;

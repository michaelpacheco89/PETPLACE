import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Map from 'material-ui/svg-icons/social/public';
import NearMe from 'material-ui/svg-icons/maps/near-me';
import Divider from 'material-ui/Divider';
var Link = require("react-router").Link;


var NavBar = React.createClass({
    getInitialState: function() {
        return {

        }
    },

    componentDidUpdate: function() {

    },

    clearCookies: function() {
      document.cookie = "UserId=''; expires=Thu, 18 Dec 2002 12:00:00 UTC; path=/ ";
      document.cookie = "pawfileId=''; expires=Thu, 18 Dec 2002 12:00:00 UTC; path=/ ";
      window.location = "/";
    },

    render: function() {
        if (!document.cookie) {
            return (
                <div className="sidebar col s12 l2">
                    <h4> Navigate </h4>
                    <List>
                        <Link to="/"><ListItem primaryText="Feed" leftIcon={<ActionGrade />} /></Link>
                            <Divider />
                        <Link to="/shelters"><ListItem primaryText="Explore Shelters" leftIcon={<NearMe />} /></Link>
                            <Divider />
                        <Link to="/login"><ListItem primaryText="Log In" leftIcon={<ContentInbox />} /></Link>
                    </List>
                </div>

            );
        }
        else {
            return (

                <div className="sidebar col s12 l2">
                    <h4> Navigate </h4>
                    <List>
                        <Link to="/"><ListItem primaryText="Feed" leftIcon={<ActionGrade />} /></Link>
                            <Divider />
                        <Link to="/shelters"><ListItem primaryText="Explore Shelters" leftIcon={<NearMe />} /></Link>
                            <Divider />
                        <Link to="/profile"><ListItem primaryText="Profile" leftIcon={<NearMe />} /></Link>
                            <Divider />
                        {/* <Link to="/map"><ListItem primaryText="Map" leftIcon={<NearMe />} /></Link> */}
                        <Link to="/" onClick={this.clearCookies}><ListItem primaryText="Log Out" leftIcon={<ContentInbox />} /></Link>
                    </List>
                </div>

            );
        }

    }

});

export default NavBar;

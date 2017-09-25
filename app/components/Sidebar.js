import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Map from 'material-ui/svg-icons/social/public';
import NearMe from 'material-ui/svg-icons/maps/near-me';
import Divider from 'material-ui/Divider';


var Sidebar = () => (
  <div className="sidebar col s12 m3 l3">
    <h4> Navigate </h4>
    <List>
      <ListItem primaryText="Pawfile" leftIcon={<ActionGrade />} />
          <Divider />
      <ListItem primaryText="Explore Shelters" leftIcon={<NearMe />} />
          <Divider />
      <ListItem primaryText="Map" leftIcon={<Map />} />
          <Divider />
      <ListItem primaryText="Chat" leftIcon={<ContentInbox />} />
    </List>
</div>
);

export default Sidebar;

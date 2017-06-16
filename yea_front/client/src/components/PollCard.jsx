import React, {Component} from 'react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

class PollCard extends React.Component {
  render() {
    return (
      <Paper zDepth={1} >
        <div>
          <h3 className="poll-title">{this.props.title}</h3>
          <p className="poll-creator">{this.props.details}</p>
        </div>
      </Paper>

    )
  }
}

export default PollCard;

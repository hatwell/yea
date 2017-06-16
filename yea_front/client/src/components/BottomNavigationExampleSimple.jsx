import React, {Component} from 'react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';


const allPollsIcon = <FontIcon className="material-icons">list</FontIcon>;
const addPollIcon = <FontIcon className="material-icons">add</FontIcon>;
const settingsIcon = <FontIcon className="material-icons">settings</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {


  render() {
    return (
      <Paper className="footer" zDepth={1}>
        <BottomNavigation  >
          <BottomNavigationItem
            label="all"
            icon={allPollsIcon}

          />
          <BottomNavigationItem
            label="new"
            icon={addPollIcon}

          />
          <BottomNavigationItem
            label="settings"
            icon={settingsIcon}

          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BottomNavigationExampleSimple from './components/BottomNavigationExampleSimple'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {

  render() {
    return (
    <MuiThemeProvider>
      <BottomNavigationExampleSimple />
    </MuiThemeProvider>
  )
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

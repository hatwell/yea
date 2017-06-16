import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BottomNavigationExampleSimple from './components/BottomNavigationExampleSimple'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './containers/MainContainer'

class App extends React.Component {

  render() {
    return (
    <MuiThemeProvider>
      <MainContainer />
    </MuiThemeProvider>
  )
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

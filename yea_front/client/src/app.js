import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BottomNavigationExampleSimple from './components/BottomNavigationExampleSimple'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from './containers/MainContainer'
import PollCardsContainer from './containers/PollCardsContainer'
// import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
    <MuiThemeProvider>
      <HashRouter >
        <div className='container'>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/_=_" component={MainContainer} />
          <Route path='/polls' component={PollCardsContainer} />
        </div>
        </HashRouter>

    </MuiThemeProvider>
  )
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

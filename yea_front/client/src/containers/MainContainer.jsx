import React from 'react'
import ReactDOM from 'react-dom'
import PollCard from '../components/PollCard'
import PollCardsContainer from './PollCardsContainer'

import LoginBox from '../auth/LoginBox'
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple'

class MainContainer extends React.Component {


  render() {
    return (
      <div>

          <LoginBox url="http://localhost:5000/" picUrl="http://graph.facebook.com/"/>
          <PollCardsContainer />
          <BottomNavigationExampleSimple />
      </div>
    )

  }

}

export default MainContainer;

import React from 'react'
import ReactDOM from 'react-dom'
import PollCard from '../components/PollCard'
import PollCardsContainer from './PollCardsContainer'
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple'

class MainContainer extends React.Component {

  render() {
    return (
      <div>
          <PollCardsContainer />
          <BottomNavigationExampleSimple />
      </div>
    )

  }

}

export default MainContainer;

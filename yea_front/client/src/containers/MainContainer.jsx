import React from 'react'
import ReactDOM from 'react-dom'
import PollCard from '../components/PollCard'
import PollCardsContainer from './PollCardsContainer'
import Header from '../components/Header'
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple'

class MainContainer extends React.Component {


  render() {
    return (
      <div>
          <Header />
          <PollCardsContainer />
          <BottomNavigationExampleSimple />
      </div>
    )

  }

}

export default MainContainer;

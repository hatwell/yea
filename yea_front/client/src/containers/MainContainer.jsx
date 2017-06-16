import React from 'react'
import ReactDOM from 'react-dom'
import PollCard from '../components/PollCard'
import BottomNavigationExampleSimple from '../components/BottomNavigationExampleSimple'

class MainContainer extends React.Component {

  render() {
    return (
      <div>
        <PollCard />
          <BottomNavigationExampleSimple />
      </div>
    )

  }

}

export default MainContainer;

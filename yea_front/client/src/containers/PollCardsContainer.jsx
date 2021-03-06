import React from 'react'
import ReactDOM from 'react-dom'
import PollCard from '../components/PollCard'
import NewPollDialog from '../components/NewPollDialog'

class PollCardsContainer extends React.Component {

  constructor(props) {
  super(props)
  this.doSearch = this.doSearch.bind(this)
  this.state = {
    searchQuery: '',
    polls: []
  }

  this.addPoll = this.addPoll.bind(this)
  this.handleClick = this.handleClick.bind(this)
}

doSearch(event){
  this.setState({searchQuery: event.target.value})
}

addPoll(poll){
  let polls = this.state.polls.slice();
  polls.push(poll)
  this.setState({polls: polls});
}

handleClick(){
  console.log("i have been clicked");
}

componentDidMount(){
var url = 'http://localhost:5000/api/polls'
var request = new XMLHttpRequest()
request.open('GET', url)

request.setRequestHeader("Content-Type", "application/json")
request.withCredentials = true

request.onload = () => {
   if(request.status === 200){
    var data = JSON.parse(request.responseText)
    this.setState( { polls: data } )
   } else{
    console.log("Uh oh you're not logged in!")
    this.props.history.goBack()
   }
}
request.send(null)
}

  render(){
    return (


  <div className='polls-container'>

    {
      this.state.polls.filter((poll) => `${poll.title} ${poll.details} ${poll.user}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
       .map((poll) => (
        <PollCard { ...poll } key={poll.id} onClick={this.handleClick}/>
      ))

    }
    <div>
      <NewPollDialog url="http://localhost:5000/api/polls" newPoll={this.addPoll} />
    </div>
  </div>



    )
  }
}

export default PollCardsContainer;

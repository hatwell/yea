import React from 'react'
import ReactDOM from 'react-dom'
import PollCard from '../components/PollCard'

class PollCardsContainer extends React.Component {

  constructor(props) {
  super(props)
  this.doSearch = this.doSearch.bind(this)
  this.state = {
    searchQuery: '',
    polls: []
  }
}

doSearch(event){
  this.setState({searchQuery: event.target.value})
}

componentDidMount(){
var url = 'http://localhost:5000/api/polls'
var request = new XMLHttpRequest()
request.open('GET', url)

request.setRequestHeader('Content-Type', "application/json")
request.withCredentials = true

request.onload = () => {
   if(request.status === 200){
    console.log("request: ", request.responseText)
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
         console.log(poll),
        <PollCard { ...poll } key={poll.id} onClick={this.props.handleClick}/>
      ))

    }
  </div>



    )
  }
}

export default PollCardsContainer;

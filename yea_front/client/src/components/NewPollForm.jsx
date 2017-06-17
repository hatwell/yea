import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'



class NewPollForm extends React.Component {

  constructor(props){
    super(props)
    this.addPoll = this.addPoll.bind(this)

    this.state = {
      title: "",
      details: ""
    }
  }

  handleOnChangeTitle(event) {
    this.setState({title: event.target.value})
  }

  handleOnChangeDetails(event) {
    this.setState({details: event.target.value})
  }

  addPoll(event){
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true

    request.onload = () => { // FAT ARROW! TO RETAIN 'this'
      if(request.status === 201){
        console.log("poll submit request sent")
        let poll = JSON.parse(request.responseText)

        this.props.onSignIn(poll)
      }
    }
    const data = {
      poll:{
        title:this.state.title,
        details:this.state.details
      }
    }
    request.send(JSON.stringify(data))
  }



  render(){

    return (
    <div className="new-poll-form">
      <TextField hintText="your question" errorText="This field is required" />
      <br/>
      <TextField
      hintText="any additional details?"
      multiLine={true}
    /><br />

  </div>
  );


  }

  propTypes: {
    value: React.PropTypes.object.isRequired
  }

}

export default NewPollForm;

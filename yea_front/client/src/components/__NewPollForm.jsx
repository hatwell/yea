import React from 'react'
import ReactDOM from 'react-dom'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'



class NewPollForm extends React.Component {

  constructor(props){
    super(props)
    this.addPoll = this.addPoll.bind(this)
    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this)
    this.handleOnChangeDetails = this.handleOnChangeDetails.bind(this)
    this.handleAddPollClick = this.handleAddPollClick.bind(this)

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

  handleAddPollClick(event){
    this.addPoll(event)
    console.log("add poll clicked")
    this.props.handleClose();
  }

  addPoll(event){
    console.log("this": this)
    console.log("poll being added")
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")

    request.withCredentials = true

    request.onload = () => { // FAT ARROW! TO RETAIN 'this'
      if(request.status === 201){
        console.log("poll submit request sent")
        let poll = JSON.parse(request.responseText)

        // this.props.onSignIn(poll)
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
      <TextField hintText="your question" errorText="This field is required" onChange={this.handleOnChangeTitle}/>
      <br/>
      <TextField
      hintText="any additional details?" onChange={this.handleOnChangeDetails}
      multiLine={true}
    /><br />

    <FlatButton
      label="Add Poll"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleAddPollClick}
    />,

  </div>
  );


  }

  propTypes: {
    value: React.PropTypes.object.isRequired
  }

}

export default NewPollForm;

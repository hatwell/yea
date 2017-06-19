import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton'
// import NewPollForm from './NewPollForm.jsx';


  const style = {
    marginRight: 20,
    float: "right"
  };

class NewPollDialog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open:false,
      title: "",
      details: ""

    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOnChangeDetails = this.handleOnChangeDetails.bind(this)
    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this)
    this.handleAddPollClick = this.handleAddPollClick.bind(this)
    this.addPoll = this.addPoll.bind(this)
  }

  handleOnChangeTitle(event) {

    this.setState({title: event.target.value})
  }

  handleOnChangeDetails(event) {
    this.setState({details: event.target.value})
  }

  handleAddPollClick(event){
    this.addPoll(event)
    this.handleClose();
    this.forceUpdate()
  }

  addPoll(event){
    console.log(this)
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true

    request.onload = () => { // FAT ARROW! TO RETAIN 'this'
      if(request.status === 201){
        console.log("poll submit request sent")
        let poll = JSON.parse(request.responseText)
        this.props.newPoll(poll)
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


  handleOpen() {
    console.log("dialog opened");
    this.setState({open: true});
  };

  handleClose() {
    console.log("cancel clicked")
    this.setState({open: false});
  }

  render() {

    const actions = [

      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,


      <FlatButton
        label="Add Poll"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleAddPollClick}
      />,

    ];

    return (
      <div>
        <FloatingActionButton style={style} onClick={this.handleOpen}>
            <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Create a new poll"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="new-poll-form">
            <TextField hintText="your question" errorText="This field is required" onChange={this.handleOnChangeTitle}/>
            <br/>
            <TextField
            hintText="any additional details?" onChange={this.handleOnChangeDetails}
            multiLine={true}
          /><br />

        </div>

        </Dialog>
      </div>
    );
  }
}

export default NewPollDialog;

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NewPollForm from './NewPollForm.jsx';


  const style = {
    marginRight: 20,
  };

class NewPollDialog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open:false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOkClick = this.handleOkClick.bind(this)
  }


  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  }

  handleOkClick() {
    console.log("clicked ok")
    this.handleClose()
  }


  render() {

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleOkClick}
      />,

      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
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
          <NewPollForm url="http://localhost:5000/"/>

        </Dialog>
      </div>
    );
  }
}

export default NewPollDialog;

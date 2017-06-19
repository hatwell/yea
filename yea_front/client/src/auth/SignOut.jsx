import React from 'react'
import { Link } from 'react-router-dom'

class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }

  signOut(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.open('DELETE', this.props.url)
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.onload  = () => {
        if (request.status === 204) {
          this.props.onSignOut(null);
        }
    }
    request.send();

    // sign out request here
  }

  render() {
    return (
       <div>
        <button onClick={this.signOut}>Sign Out</button>
        <Link className='polls-link' to='/polls'>View Polls</Link>
      </div>
    )
  }
}

export default SignOut

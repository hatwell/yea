import React from 'react'

class CommentForm extends React.Component {

  constructor(props){
    super(props)

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render(){
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Your Name"
          onChange={this.handleAuthorChange}/>
        <input type="text" placeholder="Make a Comment" onChange= {this.handleTextChange}/>
        <input type="submit" value="comment"/>
      </form>
    )
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    //both test if a string is empty
    if ( author === '' || !text ) return;
    this.props.onCommentSubmit({author: author, text: text})
    this.setState({author: "", text: ""});
  }
}

export default CommentForm;

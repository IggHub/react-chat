import React from 'react';
import Rebase from 're-base';
import AddChatroom from './AddChatroom';
import DisplayChatrooms from './DisplayChatrooms';

//Connect react to firebase with Rebase
var base = Rebase.createClass({
  apiKey: "AIzaSyBJrWtLof64CQcH0TZamWfMmhtJ9jf5OYQ",
  authDomain: "react-chat-eca58.firebaseapp.com",
  databaseURL: "https://react-chat-eca58.firebaseio.com",
  storageBucket: "react-chat-eca58.appspot.com",
})

class Chatroom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: ['room1', 'room2'],
      chatRoom: '',
      displayChatForm: false
    }
  }
  componentDidMount(){
    base.syncState(`Rooms`, {
      context: this,
      state: 'rooms',
      asArray: true
    });
  }
  handleAddRoom(e) {
    this.setState({
      rooms: this.state.rooms.concat(e)
    })
    this.toggleChatForm();
    console.log('concated', this.state.rooms)
  }
  handleRemove(index) {
    var array =  this.state.rooms.slice();
    array.splice(index, 1);
    this.setState({
      rooms: array
    })
  }
  toggleChatForm(){
    var displayChatFormToggle = this.state.displayChatForm;
    this.setState({
      displayChatForm: !displayChatFormToggle
    })
  }

  render(){
    console.log("chatForm toggle: ", this.state.displayChatForm);
    const showAddChat = this.state.displayChatForm ? <AddChatroom AddRoom={this.handleAddRoom.bind(this)} /> : <div></div>
    return(
      <div>
        Hello from chat room!! Please enter new room:
        <button type="button" onClick={this.toggleChatForm.bind(this)}>Add Room</button>
        {showAddChat}
        <DisplayChatrooms rooms={this.state.rooms} handleRemove={this.handleRemove.bind(this)} />
      </div>
    )
  }
}

export default Chatroom;

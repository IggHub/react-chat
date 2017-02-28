import React from 'react';
import Rebase from 're-base';

var base = Rebase.createClass({
  apiKey: "AIzaSyBJrWtLof64CQcH0TZamWfMmhtJ9jf5OYQ",
  authDomain: "react-chat-eca58.firebaseapp.com",
  databaseURL: "https://react-chat-eca58.firebaseio.com",
  storageBucket: "react-chat-eca58.appspot.com",
})

class ChatRoom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: ['room1', 'room2'],
      chatRoom: ''
    }
  }
  componentDidMount(){
    /*base.syncState(`Rooms`, {
      context: this,
      state: 'rooms',
      asArray: true
    });*/
  }
  addRoom(e){
    this.setState({
      chatRoom: e.target.value
    })
  }
  onSubmit(e){
    this.setState({
      rooms: this.state.arrayvar.concat([e])
  })
  }
  render(){
    console.log("rooms: ", this.state.rooms)
    return(
      <div>
        Hello from chat room!! Please enter new room: <input type="text" onChange={this.addRoom.bind(this)}/><button type="button" onSubmit={this.onSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default ChatRoom;

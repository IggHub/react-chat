import React from 'react';
import Rebase from 're-base';
import AddChatroom from './AddChatroom';
import DisplayChatrooms from './DisplayChatrooms';
//import {removeChatroom} from '../../lib/chatroomHelpers';
//import {Router} from 'react-router';
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
      chatRoom: ''
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
    console.log('concated', this.state.rooms)
  }
  handleRemove(index) {
    var array =  this.state.rooms.slice();
    array.splice(index, 1);
    this.setState({
      rooms: array
    })
  }
  firebaseRemove(e){
    base.remove('Rooms', function(err){
      if(err) {
        console.log(err);
      }
    })
  }

  render(){
    return(
      <div>
        Hello from chat room!! Please enter new room:
        <AddChatroom AddRoom={this.handleAddRoom.bind(this)} />
        <DisplayChatrooms rooms={this.state.rooms} handleRemove={this.handleRemove.bind(this)} />
      </div>
    )
  }
}

export default Chatroom;

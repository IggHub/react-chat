import React from 'react';

class DisplayChatrooms extends React.Component{
  render(){
    console.log('display: ', this.props.rooms)
    console.log('props: ', this.props.handleRemove)
    var rooms = this.props.rooms.map(function(room, index){
      return (
        <li key={index}>{room} <a href="#" onClick={this.props.handleRemove(index)}>x</a></li>
      )
    })
    return(
      <div>
        <ul>
          {rooms}
        </ul>
      </div>
    )
  }
}

export default DisplayChatrooms;

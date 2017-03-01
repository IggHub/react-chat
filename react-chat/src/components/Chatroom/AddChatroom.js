import React from 'react';
import ReactDOM from 'react-dom';

class AddChatroom extends React.Component{
  handleSubmit(){
    var newRoom = ReactDOM.findDOMNode(this.refs.room).value;
    console.log(newRoom);
    ReactDOM.findDOMNode(this.refs.room).value = '';
    this.props.AddRoom(newRoom);
  }
  render(){
    return(
      <div>
        <input type="text" className="form-control" placeholder="Add a new note" ref="room" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    )
  }
}

export default AddChatroom;

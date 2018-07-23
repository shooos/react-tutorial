import React from 'react';
import './messages.css';

export default class Messages extends React.Component {
  render() {
    const messages = [];
    this.props.messages.forEach((message, index) => {
      messages.push(<div key={index}>{message}</div>);
    });

    return this.props.messages.length ? (
      <div className="messages">
        <h2>Messages</h2>
        <button className="clear" onClick={this.props.clearMessages}>
          clear
        </button>
        {messages}
      </div>
    ) : null;
  }
}

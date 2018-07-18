import React from 'react';

export default class Messages extends React.Component {
  render() {
    const messages = [];
    this.props.messageService.messages.forEach((message, index) => {
      messages.push(<div key={index}>{message}</div>);
    });

    return this.props.messageService.messages.length ? (
      <div>
        <h2>Messages</h2>
        <button className="clear" onClick={this.props.messageService.clear}>
          clear
        </button>
        {messages}
      </div>
    ) : null;
  }
}

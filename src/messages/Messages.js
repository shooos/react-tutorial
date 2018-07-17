import React from 'react';

export default class Messages extends React.Component {
  render() {
    const messages = [];
    for (let message of this.props.messageService.messages) {
      messages.push(<div>{message}</div>);
    }

    console.log(this.props.messageService.messages);

    return this.props.messageService.messages.length ? (
      <div>
        <h2>Messages</h2>
        <button class="clear" onClick={this.props.messageService.clear()}>
          clear
        </button>
        {messages}
      </div>
    ) : null;
  }
}

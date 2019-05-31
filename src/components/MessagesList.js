import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    {messages.map(message => (
      <Message key={message.id} {...message} />
    ))}
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;

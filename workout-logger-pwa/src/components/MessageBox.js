import React from 'react';

const MessageBox = ({ message }) => {
  if (!message || !message.text) return null;

  return (
    <div className={`message-box ${message.type}`}>
      {message.text}
    </div>
  );
};

export default MessageBox;
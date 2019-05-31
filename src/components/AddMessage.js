import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddMessage = ({ dispatchAddMessage }) => {
  const inputRef = useRef();

  const handleKeyPress = event => {
    if (inputRef.current.value && event.key === 'Enter') {
      dispatchAddMessage(inputRef.current.value, 'Me'); // TODO: change the user name
      inputRef.current.value = '';
    }
  };

  return (
    <section id="new-message">
      <input type="text" ref={inputRef} onKeyPress={handleKeyPress}/>
    </section>
  );
};

AddMessage.propTypes = {
  dispatchAddMessage: PropTypes.func.isRequired
};

export default AddMessage;

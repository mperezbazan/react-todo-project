import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addTodoProps } = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit" type="button">
        <FaPlusCircle
          style={{
            color: 'darkcyan',
            fontSize: '20px',
            marginTop: '2px',
          }}
        />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;

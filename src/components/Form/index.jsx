import React, { useState, useRef } from 'react'; 
import './index.css';
import { getData } from '../../utils/function';

function Form() {
  const nameRef = useRef(null); 
  const [error, setError] = useState(''); 


  function validate() {
    if (nameRef.current.value.trim().length < 5) {
      nameRef.current.focus();
      setError("Kamida 5 ta belgidan iborat bo'lishi kerak"); 
      return false;
    } else {
      setError(''); 
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate(); 
    if (isValid) {
      const todo = {
        name: nameRef.current.value,
        status: 'unchecked',
        id: Date.now(),
      };

      let todos = getData();
      todos.push(todo); 
      localStorage.setItem('todos', JSON.stringify(todos)); 
      changeState(todos);
      nameRef.current.value = ''; 
    }


  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="field">
        <input type="text" ref={nameRef} />
        {error && <p>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

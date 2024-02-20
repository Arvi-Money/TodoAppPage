import { useState } from 'react';
import './index.css'
import { useRef } from 'react'

function Form() {
  const nameRef = useRef('');
  const [error, setError] = useState('');

  function validate(nameRef) {
    if (nameRef.current.value.trim().length < 5) {
      nameRef.current.focus();
      setError("Kamida 5ta belgidan iborat bolishi kerak")
      return false;
    } else{
      setError('');
    }

    return true;
  }


  function getData() {
    let data = [];
    if (localStorage.getItem('todos')) {
      data = JSON.parse(localStorage.getItem('todos'))
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate(nameRef);
    if (isValid) {
      const todo ={
        name: nameRef.current.value,
        status: 'unchecked',
        id: Date.now()
      }

      let todos = getData();
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      nameRef.current.value = '';
    }
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="field">
        <input type="text" ref={nameRef}/>
        {
          error && <p>{error}</p>
        }
      </div>
        <button>Submit</button>
    </form>
  )
}

export default Form
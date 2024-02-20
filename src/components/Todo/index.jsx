import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../Header';
import Form from '../Form';
import TodoItem from '../TodoItem';
import { getData } from '../../utils/function'; 

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getData());
  }, []);

  function handleDelete(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos); 
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
  }

  function handleCheck(id, status) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.status = status ? 'checked' : 'unchecked'; 
      }
      return todo;
    });

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
  }

  return (
    <div className='todo-wrapper'>
      <Header />
      <div className="form-wrapper">
        <Form changeState={setTodos} />
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index + 1}
            data={todo}
            check={handleCheck}
            deleteTodo={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;

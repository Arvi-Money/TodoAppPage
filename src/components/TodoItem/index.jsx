import React from 'react';
import './index.css';

function TodoItem(props) {
    const { name, status, id } = props.data;
    const { index, deleteTodo, check } = props;

    const styleObj = {
        backgroundColor: index % 2 === 1 ? 'green' : 'white'
    };

    function handleDelete(e) {
        e.preventDefault();
        const isDelete = window.confirm(`Rostdan ham ${name} ni o'chirmoqchimisiz?`);
        if (isDelete) {
            deleteTodo(id);
        }
    }

    function handleChange(e) {
        check(e.target.checked, id);
    }

    return (
        <div className='item-wrapper' style={styleObj}>
            <div className="check-name">
                <input type="checkbox" id={'el_' + id} onChange={handleChange} checked={status === 'checked'} />
                <label htmlFor={'el_' + id}>{name}</label>
            </div>
            <div className="actions">
                <i className="fa-regular fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>
        </div>
    );
}

export default TodoItem;

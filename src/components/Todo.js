import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { TiDelete } from 'react-icons/ti';
import { MdOutlineModeEdit } from 'react-icons/md';
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const myFunction = () => {
        let checkbox = document.getElementById("myCheck");
        let text = document.getElementById("text");
        if (checkbox.checked === true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div className='container'>
                <input type="checkbox" id="mycheck" onClick={myFunction} />
                <span className='checkmark'></span>
            </div>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                < TiDelete
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <MdOutlineModeEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>

    ));
};

export default Todo;
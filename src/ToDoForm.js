import React, { useState } from 'react';



const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <span className="s1">
           <label>Add Task here</label> <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
           </span>
           <span className="s2">
           <button className="button">Submit</button>
           </span>
        </form>
        
    );
};

export default ToDoForm;
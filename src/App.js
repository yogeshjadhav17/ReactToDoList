import React ,{useState} from 'react';
import './index.css';
import Header from "./Header";
import data from "./data.json";
import ToDoForm from './ToDoForm';
import ToDoList from './TodoList';
import userEvent from '@testing-library/user-event';


function App(){
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete} : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy= [ ...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
    setToDoList(copy);
  }
  return(
    <div className="App">
     
      <Header/>
      
      
     <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    
    </div>
  );
}

export default App;
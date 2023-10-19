import { useState } from "react";

export default function TodoApp(){
    
    const [todos, setTodos] = useState([
        'item 1',
        'item 2',
        'item 3'
    ]); 
    
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        //console.log(event.target.value);
      setInputValue(event.target.value);
    };
  
    function handleAddTodo() {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue]);
        //console.log(todos)
        setInputValue('');
      }
    };

    function deleteToDo(index){
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
  
    return (
      <div>
        <div className="form-div">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a todo"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        
          {todos.map((todo, index) => (
            <div className="to-do-item">
                <p key={index}>{todo}</p>
                <button className="delete-item-button" onClick={() => deleteToDo(index)}>
                Delete
            </button>
            </div>
          ))}
            
      </div>
    );
  }


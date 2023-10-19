import { useState } from "react";

export default function TodoApp(){
    
    const [todos, setTodos] = useState([
        'item 1',
        'item 2',
        'item 3'
    ]); 
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  
    return (
      <div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a todo"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }


import { useEffect, useState } from "react";

export default function TodoApp(){
    
    const [todos, setTodos] = useState([
    { text: 'item 1', completed: false },
    { text: 'item 2', completed: false },
    { text: 'item 3', completed: false }
    ]); 

    
    
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        //console.log(event.target.value);
      setInputValue(event.target.value);
    };
  
    function handleAddTodo() {
      if (inputValue.trim()) {
        setTodos([...todos, {text: inputValue, completed: false}]);
        //console.log(todos)
        setInputValue('');
      }
    };

    function deleteToDo(index){
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function toggleCompletion(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
      };

     
    const uncompletedCount = todos.filter(todo => !todo.completed).length;
     
  
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
        <div>
            <h2>{uncompletedCount}</h2>
        </div>
        
          {todos.map((todo, index) => (
            <div className="to-do-item">
                <p key={index}>{todo.text}</p>
                <span onClick={() => toggleCompletion(index)}>
                    {todo.completed ? "✔" : "❌"}
                </span>
                <button className="delete-item-button" onClick={() => deleteToDo(index)}>
                Delete
            </button>
            </div>
          ))}
            
      </div>
    );
  }


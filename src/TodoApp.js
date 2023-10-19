import { useState } from "react";

export default function TodoApp(){
    
    const [todos, setTodos] = useState([
        'item 1',
        'item 2',
        'item 3'
    ]); 
    
    return(
        <div>
            <p>{todos}</p>
        </div>

    );

}
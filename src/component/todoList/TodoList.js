import axios from 'axios';
import React, { useState } from 'react';

const TodoList = () => {
  const [text, setText] = useState("");
  const api = process.env.REACT_APP_API_URL
  const createTodo = () => {
    axios({
      url:`${api}todos`,
      method:"POST",
      
    })
  }


  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <button onClick={createTodo}>작성</button>
      </div>
    </div>
  );
};

export default TodoList;
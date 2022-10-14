import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Todo = () => {
  const access_token = localStorage.getItem("access_token");
  console.log(access_token)
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState("");

  useEffect(() => {
    if (access_token === null) {
      alert("로그인 먼저 해주세요");
      navigate("/");
    }
    
    axios({
        url: `${api}todos`,
        method: "GET",
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      }).then((res) => {
        setTodoList(res.data);
      }).catch(error => {
        console.log(error);
        throw new Error(error);
      })
  }, [])
  
  console.log(todoList)

  const api = process.env.REACT_APP_API_URL
  const createTodo = () => {
    axios({
      url: `${api}todos`,
      method: "POST",
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-Type": "application/json"
      },
      data: {
        "todo": todo
      }
    }).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    })
  }

  return (
    <div>
      <div className="border">
        <input className="border-black border" type="text" onChange={(e) => setTodo(e.target.value)} />
        <button className="p-3 bg-blue-400" onClick={createTodo}>작성</button>
        {todoList.map}
      </div>˝
    </div>
  );
};

export default Todo;
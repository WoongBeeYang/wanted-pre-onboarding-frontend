import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Todo = () => {
  const access_token = localStorage.getItem("access_token")
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (access_token === undefined || access_token === null) {
      alert("로그인 먼저 해주세요");
      navigate("/");
    }
  }, [])

  const api = process.env.REACT_APP_API_URL
  const createTodo = () => {
    axios({
      method: "POST",
      url: `${api}todos`,
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Indvb25nYmVlQHdvb25nYmVlIiwic3ViIjoyMDUzLCJpYXQiOjE2NjU3NDEwMDEsImV4cCI6MTY2NjM0NTgwMX0.MQUfvp04gh9bGMdk_zkYlu1SX4uA04rNYLe5xT0uuOc",
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
      </div>˝
    </div>
  );
};

export default Todo;
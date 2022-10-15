import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TodoList from './todoList/TodoList'

const Todo = () => {
  const access_token = localStorage.getItem("access_token"); 
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState("");
  const api = process.env.REACT_APP_API_URL
  

  useEffect(() => {
    if (access_token === null) {
      alert("로그인 먼저 해주세요");
      navigate("/");
    }
    // Todo List 받아오기
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
      alert("작성되었습니다.")
      window.location.reload();
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    })
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 w-[900px] h-full mx-auto">
        <div className="text-center">
          <p className="text-center text-2xl font-bold">TodoList!</p>
        </div>

        <div>
          <div className="flex flex-col gap-3 ">
            {todoList !== "" ? todoList.map((data) => <div key={data.id}> <TodoList data={data} /> </div>) : ""}
          </div>

          <div className="flex justify-center">
            <div className="p-3">
              <input className="border p-3 w-[500px]" type="text" onChange={(e) => setTodo(e.target.value)} />
            </div>

            <div className="my-auto">
              <button className="w-20 p-3 bg-gray-400" onClick={createTodo}>작성</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
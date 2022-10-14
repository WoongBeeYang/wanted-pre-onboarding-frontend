import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Todo = () => {
  const access_token = localStorage.getItem("access_token")
  const navigate = useNavigate();

  useEffect(()=> {
    if(access_token === undefined || access_token === null) {
      alert("로그인 먼저 해주세요");
      navigate("/");
    }
  },[])
  return (
    <div>
      
    </div>
  );
};

export default Todo;
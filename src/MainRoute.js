import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Todo from './component/Todo';
import Login from './component/Login';

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='todo' element={<Todo />} />
    </Routes>

  );
};

export default MainRoute;
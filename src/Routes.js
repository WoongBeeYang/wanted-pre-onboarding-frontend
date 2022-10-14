import {Route} from 'react-router-dom'

import React from 'react';
import Todo from './component/Todo';

const Routes = () => {
  return (
    <Routes>
      <Route path='todo' element={<Todo/>} />
    </Routes>
  );
};

export default Routes;
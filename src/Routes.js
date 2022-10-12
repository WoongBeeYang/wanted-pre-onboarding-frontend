import {Route} from 'react-router-dom'

import React from 'react';
import SignUp from './component/SignUp';
import Todo from './component/Todo';

const Routes = () => {
  return (
    <Routes>
      <Route path='sign-up' element={<SignUp/>} />
      <Route path='to-do' element={<Todo/>} />
    </Routes>
  );
};

export default Routes;
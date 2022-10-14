
import React, { useState } from 'react';

const TodoList = ({ data }) => {
  const [text, setText] = useState("");



  return (
    <>
      <div className='border p-3'>
        <div className='border p-3 my-1'>
          <p>제목 : {data.todo}</p>
        </div>
        
        <div className='flex'>
          <div className='float-right'>
            <button className='mx-2 p-2 border'>수정</button>
            <button className='mx-2 p-2 border'>삭제</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
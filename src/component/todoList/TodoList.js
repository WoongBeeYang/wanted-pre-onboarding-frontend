
import axios from 'axios';
import React, { useState } from 'react';

const TodoList = ({ data }) => {
  const [text, setText] = useState("");
  const [modify, setModify] = useState(false);
  const [modifyText, setModifyText] = useState("")
  const api = process.env.REACT_APP_API_URL
  const access_token = localStorage.getItem("access_token");
  const id = data.id
  const isCompletedCheck = data.isCompleted

  const modifyHandler = () => {
    setModify(!modify)
    if (modify === true) {
      axios({
        url: `${api}todos/${id}`,
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${access_token}`,
          "Content-Type": "application/json"
        },
        data: {
          "todo": modifyText,
          "isCompleted": isCompletedCheck
        }
      }).then((res) => {
        alert("수정되었습니다.")
        console.log(res)
        window.location.reload()
      }).catch(error => {
        console.log(error);
        throw new Error(error);
      })
    }
  }

  const deleteList = () => {
    axios({
      url: `${api}todos/${id}`,
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    })
    alert("삭제되었습니다.")
    window.location.reload()
  }
  return (
    <>
      <div className='border p-3'>

        <div className='border p-3 my-1'>
          {modify === true ?
            <div className='flex gap-3'>
              <input type="text" className='w-[300px] p-3' onChange={(e) => setModifyText(e.target.value)} placeholder={data.todo} />
            </div>
            :
            <p>{data.todo}</p>}
        </div>

        <div className='flex gap-2 justify-end'>
          {modify === true ?
            <div className='flex gap-2'>
              <button className='text-gray-400 underline' onClick={modifyHandler}>수정하기</button>
              <button className="text-gray-400 underline" onClick={() => setModify(false)}>취소</button>
            </div>
            :
            <>
              <button className='text-gray-400 underline' onClick={modifyHandler}>수정</button>
              <button className='text-gray-400 underline' onClick={deleteList}>삭제</button>
            </>
          }

        </div>

      </div>
    </>
  );
};

export default TodoList;
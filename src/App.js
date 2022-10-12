import { Route } from "react-router-dom";




function App() {
  return (
    <div>
      <div className="border w-[500px] h-[500px] mx-auto text-center mt-10">
        <div className='mt-3'>
          <p className='text-3xl font-bold'> 로그인하기 </p>
        </div>

        <div className='mt-10 flex w-[300px] mx-auto flex-col my-auto'>
          {/* 아이디 */}
          <div className='flex border p-3 my-1'>
            <p>이메일 :
              <input type="text" />
            </p>
          </div>
          {/* 비밀번호 */}
          <div className='flex border p-3 my-1'>
            <p>비밀번호 :
              <input type="text" />
            </p>
          </div>
          <div className='flex mx-auto gap-5 mt-1'>
              <button className='border p-3' onClick="">회원가입</button>
              <button className='border p-3' onClick="">로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

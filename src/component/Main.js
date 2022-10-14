import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Routes from "./Routes";



function Main() {
  const api = process.env.REACT_APP_API_URL
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailDiv, setEmailDiv] = useState("")
  const [pwdDiv, setPwdDiv] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);
  const navigate = useNavigate();

  const checkEmail = (e) => {
  setEmail(e.target.value)
    if (!email.includes("@")) {
      setEmailDiv("@를 포함해야합니다.")
    } else {
      setEmailDiv("")
    }
  }

  const checkPwd = (e) => {
    setPassword(e.target.value)
    if (password.length < 7) {
      setPwdDiv("8글자 이상 입력해주세요")
    } else {
      setPwdDiv("")
    }
  }

  useEffect(() => {
    if (password.length > 7 && email.includes('@')) {
      setLoginBtn(true)
    } else {
      setLoginBtn(false)
    }
  }, [email, password])

  const checkSignUp = () => {
    axios({
      method: "POST",
      url: `${api}auth/signup`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: email,
        password: password
      }
    }).then((res) => {
      alert("회원가입 되었습니다.");
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    })
  }

  const checkSignIn = () => {
    axios({
      method: 'POST',
      url: `${api}auth/signin`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: email,
        password: password
      }
    }).then((res) => {
      const access_token = res.data.access_token;
      localStorage.setItem("access_token",access_token)
      alert("로그인 되었습니다.");
      navigate("/todo")
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    })
  }

  return (
    <>
    <Routes/>
      <div className="border w-[500px] h-[500px] mx-auto text-center mt-10">
        <div className='mt-3'>
          <p className='text-3xl font-bold'> 로그인하기 </p>
        </div>

        <div className='mt-10 flex w-[300px] mx-auto flex-col my-auto'>
          {/* 아이디 */}
          <div className='flex flex-col border p-3 my-1'>
            <div className="flex">
              <p>이메일 :
                <input type="text" id="email" onChange={checkEmail} />
              </p>
            </div>
            <div className="mt-2">
              <p className="text-red-400 text-xs">{emailDiv}</p>
            </div>
          </div>

          {/* 비밀번호 */}
          <div className='flex flex-col border p-3 my-1'>
            <div className="flex">
              <p >비밀번호 :
                <input type="password" id="password" onChange={checkPwd} />
              </p>
            </div>
            <div className="mt-2">
              <p className="text-red-400 text-xs">{pwdDiv}</p>
            </div>
          </div>

          <div className='flex mx-auto gap-5 mt-1'>
            <button className='border p-3' onClick={checkSignUp} id="signInBtn">회원가입</button>
            <button className='border p-3 disabled:bg-gray-400' id="signUpBtn" disabled={loginBtn === true ? false : true} onClick={checkSignIn}>로그인</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

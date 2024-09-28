import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./Login.css";
/*
function Login() {
    const navigate = useNavigate();
    function ToSignup() {
        navigate("/signup");
        return;
      }
  return (
    <div>
      <Header />
      <div className="Loginpage">
        <div className="TitleLogin">로그인</div>
        <div className="InputLogin">
          <input placeholder="  아이디를 입력해주세요"></input>
          <input placeholder="  비밀번호를 입력해주세요"></input>
        </div>
        <div className="SubmitBtns">
          <button className="SignupBtn" onClick={ToSignup}>회원가입</button>
          <button className="LoginSubmit">로그인</button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="img/배경사진.jpg" />
      </div>
    </div>
  );
}

export default Login;

*/

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function ToSignup() {
    navigate("/signup");
  }

  function handleLogin() {
    // 여기에 로그인 처리 로직을 추가합니다.
    // 예를 들어, 아이디와 비밀번호를 서버로 전송하여 인증을 수행합니다.
    // 인증이 성공하면 다음 페이지로 이동하도록 설정합니다.
    // 이 예시에서는 간단하게 아이디와 비밀번호를 출력하는 것으로 대체합니다.
    console.log("Username:", username);
    console.log("Password:", password);

    // 로그인 성공 시 다음 페이지로 이동
    navigate("/");
  }

  return (
    <div>
      <Header />
      <div className="Loginpage">
        <div className="TitleLogin">로그인</div>
        <div className="InputLogin">
          <input
            placeholder="  아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="  비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="SubmitBtns">
          <button className="SignupBtn" onClick={ToSignup}>
            회원가입
          </button>
          <button className="LoginSubmit" onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="img/동네.png" />
      </div>
    </div>
  );
}

export default Login;
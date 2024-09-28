/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const EmailVerification = ({ handleEmailVerification }) => {
  const [email, setEmail] = useState('');

  const handleEmailVerificationClick = () => {
    handleEmailVerification(email);
  };

  return (
    <div className="form-group">
      <label>학교 이메일 인증</label>
      <input 
        type="email" 
        placeholder="예: Daeil1234@band.ac.kr" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleEmailVerificationClick}>인증요청</button>
    </div>
  );
};

const CodeVerification = ({ handleCodeVerification }) => {
  const [code, setCode] = useState('');

  const handleCodeVerificationClick = () => {
    handleCodeVerification(code);
  };

  return (
    <div className="form-group">
      <label>인증번호</label>
      <input 
        type="text" 
        placeholder="인증번호 4자리" 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
      />
      <button onClick={handleCodeVerificationClick}>확인</button>
    </div>
  );
};

const EmailVerificationPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleEmailVerification = (email) => {
    console.log("Email verification requested for:", email);
    setStep(2);
  };

  const handleCodeVerification = (code) => {
    console.log("Code verification with code:", code);
    setStep(3);
  };

  const handleCompletion = () => {
    navigate("/completed");
  };

  return (
    <div className="verification-page">
      <Header />
      <div className="verification-container">
        <div className="verification-box">
          {step === 1 && <EmailVerification handleEmailVerification={handleEmailVerification} />}
          {step === 2 && <CodeVerification handleCodeVerification={handleCodeVerification} />}
          {step === 3 && <button className="complete-button" onClick={handleCompletion}>완료</button>}
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
/*
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./EmailVerification.css";

function EmailVerification() {
  const EmailVerification = ({ handleEmailVerification }) => {
    const [email, setEmail] = useState('');
  
    return (
      <div className="form-group">
        <label>학교 이메일 인증</label>
        <input 
          type="email" 
          placeholder="예: Daeil1234@band.ac.kr" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button onClick={() => handleEmailVerification(email)}>인증요청</button>
      </div>
    );
  };
  
  const CodeVerification = ({ handleCodeVerification }) => {
    const [code, setCode] = useState('');
  
    return (
      <div className="form-group">
        <label>인증번호</label>
        <input 
          type="text" 
          placeholder="인증번호 4자리" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
        />
        <button onClick={() => handleCodeVerification(code)}>확인</button>
      </div>
    );
  };
  
  const StudentVerificationPage = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
  
    const handleEmailVerification = (email) => {
      // Add email verification logic here
      console.log("Email verification requested for:", email);
      // Move to next step
      setStep(2);
    };
  
    const handleCodeVerification = (code) => {
      // Add code verification logic here
      console.log("Code verification with code:", code);
      // Move to next step
      setStep(3);
    };
  
    const handleCompletion = () => {
      // Add completion logic here
      // For example, navigate to another page
      navigate("/completed");
    };
  
    return (
      <div className="verification-page">
        <Header />
        <div className="verification-container">
          <div className="verification-box">
            {step === 1 && <EmailVerification handleEmailVerification={handleEmailVerification} />}
            {step === 2 && <CodeVerification handleCodeVerification={handleCodeVerification} />}
            {step === 3 && <button className="complete-button" onClick={handleCompletion}>완료</button>}
          </div>
        </div>
      </div>
    );
  };
}


export default EmailVerification;


*/
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

export default email;

*/

/*

const EmailVerification = ({ handleEmailVerification }) => {
  const [email, setEmail] = useState('');

  return (
    
    <div className="form-group">
      <label>학교 이메일 인증</label>
      <input 
        type="email" 
        placeholder="예: Daeil1234@band.ac.kr" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={() => handleEmailVerification(email)}>인증요청</button>
    </div>
  );
};

const CodeVerification = ({ handleCodeVerification }) => {
  const [code, setCode] = useState('');

  return (
    <div className="form-group">
      <label>인증번호</label>
      <input 
        type="text" 
        placeholder="인증번호 4자리" 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
      />
      <button onClick={() => handleCodeVerification(code)}>확인</button>
    </div>
  );
};

const StudentVerificationPage = () => {
  const [step, setStep] = useState(1);

  const handleEmailVerification = (email) => {
    // Add email verification logic here
    console.log("Email verification requested for:", email);
    // Move to next step
    setStep(2);
  };

  const handleCodeVerification = (code) => {
    // Add code verification logic here
    console.log("Code verification with code:", code);
    // Move to next step
    setStep(3);
  };

  return (
    <div className="verification-page">
      <Header />
      <div className="verification-container">
        <div className="verification-box">
          {step === 1 && <EmailVerification handleEmailVerification={handleEmailVerification} />}
          {step === 2 && <CodeVerification handleCodeVerification={handleCodeVerification} />}
          {step === 3 && <button className="complete-button">완료</button>}
        </div>
      </div>
    </div>
  );
}





*/

/*

import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // 이메일 인증 요청 함수
  const handleEmailVerification = () => {
    // 이메일 인증 로직 추가
    console.log("이메일 인증 요청:", email);
    // 이메일 인증이 성공하면 다음 단계로 이동하도록 설정
    navigate("/email-verification");
  };

  return (
    <div>
      <Header />
      <div className="Signuppage">
        {/* 뒤로 가기 버튼 */
        /*
        <button className="BackBtn" onClick={() => navigate("/login")}>
          <img className="BackBtn" alt="Back" src="img/arrow.png" />
        </button>
        <div className="TitleSignup">회원가입</div>
        <div className="InputSignup">
          <p>학교 이메일 인증</p>
          <div className="Nicknamebox">
            <input placeholder=" 예: Daeil1234@band.ac.kr" />
            <button>인증요청</button>
          </div>
          <p>인증번호</p>
          <div className="Nicknamebox">
            <input placeholder="  인증번호 4자리" />
            <button>확인</button>
          </div>
        </div>
        <div>
          {/* 다음 버튼을 클릭하면 이메일 인증 페이지로 이동 */
  /*
          <button className="NextBtn" onClick={handleEmailVerification}>
            다음
          </button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="img/배경사진.jpg" />
      </div>
    </div>
  );
}
export default Signup;

*/
import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./EmailVerification.css";

function EmailVerification() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 임의의 인증번호 생성 함수
  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setGeneratedCode(code.toString());
    console.log("인증번호 발송:", code);
    alert("인증번호가 발송되었습니다.\n인증번호: " + code);
  };

  // 이메일 인증 요청 함수
  const handleEmailVerification = () => {
    generateVerificationCode();
    console.log("이메일 인증 요청:", email);
  };

  // 코드 확인 함수
  const handleCodeVerification = () => {
    if (verificationCode === generatedCode) {
      setVerificationSuccess(true);
      setErrorMessage("성공했습니다");
      console.log("인증번호 확인: 성공");
    } else {
      setVerificationSuccess(false);
      setErrorMessage("인증번호가 일치하지 않습니다. 다시 시도해주세요.");
      console.log("인증번호 확인: 실패");
    }
  };

  // 다음 페이지로 이동 함수
  const handleNext = () => {
    if (verificationSuccess) {
      navigate("/Completed");
    } else {
      setErrorMessage("인증을 완료해주세요.");
    }
  };

  return (
    <div>
      <Header />
      <div className="Signuppage">
        {/* 뒤로 가기 버튼 */}
        <button className="BackBtn" onClick={() => navigate("/login")}>
          <img className="BackBtn" alt="Back" src="img/arrow.png" />
        </button>
        <div className="TitleSignup">회원가입</div>
        <div className="InputSignup">
          <p>학교 이메일 인증</p>
          <div className="Nicknamebox">
            <input
              placeholder=" 예: Daeil1234@band.ac.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleEmailVerification}>인증요청</button>
          </div>
          <p>인증번호</p>
          <div className="Nicknamebox">
            <input
              placeholder="  인증번호 4자리"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={handleCodeVerification}>확인</button>
          </div>
        </div>
        <div className="ErrorMessage">{errorMessage}</div>
        <div>
          {/* 다음 버튼을 클릭할 수 있도록 조건 추가 */}
          <button
            className="NextBtn"
            onClick={handleNext}
            disabled={!verificationSuccess} // 인증 성공 여부에 따라 버튼 활성화/비활성화
          >
            다음
          </button>
        </div>
      </div>
      <div className="Background">
        <img alt="background" src="img/동네.png" />
      </div>
    </div>
  );
}

export default EmailVerification;
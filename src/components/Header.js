import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  function ToLogin() {
    navigate("/login");
    return;
  }

  // AI 동네 추천을 클릭했을 때 이동하는 함수
  function goToFacilityDetailPage() {
    navigate("/FacilityDetailPage"); // 라우트 설정에 따라 해당 경로로 이동
  }

  // 로고를 클릭했을 때 메인 페이지로 이동하는 함수
  function goToMainPage() {
    navigate("/"); // 메인 페이지 경로로 이동
  }

  return (
    <header>
      <div className="logo" onClick={goToMainPage} style={{ cursor: "pointer" }}>
        <span role="img" aria-label="logo">🏡</span> 새터전
      </div>
      <nav>
        <ul>
          <li><a href="#ai-recommendations" onClick={goToFacilityDetailPage}>AI 동네 추천</a></li>
          <li><a href="#community">커뮤니티</a></li>
          <li><a href="#my-picks">My Picks</a></li>
          <li><a href="#tourism-info">동네 관광정보</a></li>
          <li><a href="#photo-studio">AI Photo Studio</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#my-page">My Page</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="검색어를 입력하세요...." />
        <span role="img" aria-label="search" className="search-icon">🔍</span>
        <button className="LoginBtn" onClick={ToLogin}>
            로그인
          </button>
      </div>
    </header>
  );
}

export default Header;

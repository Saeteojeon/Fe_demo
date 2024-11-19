// Mypick.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Mypick.css";

const Mypick = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="mypick-background">
        <img alt="background" src="/img/Back.png" className="facility-background-img" />
        <div className="mypick-container">
          <h1 className="page-title">My Pick 페이지</h1>
          <p className="page-subtitle"></p>

          <div className="pick-grid">
            <div 
              className="pick-item"
              onClick={() => handleNavigate('/FavoritePick')}
            >
              <div className="pick-content">
                <div className="image-placeholder">
                  <span className="image-icon">🖼️</span>
                </div>
                <div className="pick-text">
                  <h2>대표 찜 설정</h2>
                  <p>선호하는 대표 지역 또는 장소를 설정하여 나만의 맞춤형 추천을 받아보세요.</p>
                </div>
              </div>
            </div>

            <div 
              className="pick-item"
              onClick={() => handleNavigate('/KeywordPick')}
            >
              <div className="pick-content">
                <div className="image-placeholder">
                  <span className="image-icon">🖼️</span>
                </div>
                <div className="pick-text">
                  <h2>키워드별 찜 목록</h2>
                  <p>저장한 장소를 키워드로 분류하여 쉽게 확인하세요</p>
                </div>
              </div>
            </div>

            <div 
              className="pick-item"
              onClick={() => handleNavigate('/FacilityPick')}
            >
              <div className="pick-content">
                <div className="image-placeholder">
                  <span className="image-icon">🖼️</span>
                </div>
                <div className="pick-text">
                  <h2>편의시설별 찜 목록</h2>
                  <p>선택한 편의시설 기준으로 찜한 장소들을 관리하고 자유롭게 활용하세요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypick;

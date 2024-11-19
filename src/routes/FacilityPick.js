// FacilityPick.jsx
import React from 'react';
import Header from '../components/Header';
import './FacilityPick.css';

const FacilityPick = () => {
  return (
    <div className="facility-wrapper">
      <Header />
      <div className="facility-background">
        <img alt="background" src="/img/Back.png" className="background-image" />
        <div className="facility-container">
          <div className="facility-header">
            <h1 className="page-title">편의시설별 키워드 등록</h1>
           
          </div>

          <div className="facility-content">
            <div className="location-info">
              <h2>관심있는 지역정보</h2>
              <p>마포구 와우산로</p>
              <div className="location-image-container">
                <img 
                  src="/img/wow.jpg" 
                  alt="지역 이미지" 
                  className="location-image"
                />
              </div>
            </div>

            <div className="facility-list">
              <div className="facility-item">
                <span className="number">1</span>
                <div className="facility-text">
                  <h3>조용한 곳</h3>
                  <p>외부 소음이 적고 한적한 골목에 위치하여, 개인적인 시간을 보내거나 사색하기에 적합한 장소입니다.</p>
                </div>
              </div>

              <div className="facility-item">
                <span className="number">2</span>
                <div className="facility-text">
                  <h3>편의점 많음</h3>
                  <p>주요 거리마다 편의점이 밀집해 있어 필요한 물품을 빠르고 쉽게 구매할 수 있습니다.</p>
                </div>
              </div>

              <div className="facility-item">
                <span className="number">3</span>
                <div className="facility-text">
                  <h3>미용실 및 여가시설 다수</h3>
                  <p>최신 스타일의 미용실과 다양한 여가 시설(헬스장, 스파) 등이 근처에 있어 생활 편의성이 높습니다.</p>
                </div>
              </div>

              <div className="facility-item">
                <span className="number">4</span>
                <div className="facility-text">
                  <h3>세탁소 존재</h3>
                  <p>세탁소와 드라이클리닝 서비스가 가까운 곳에 위치해 있어 일상적인 생활에 매우 편리합니다.</p>
                </div>
              </div>

              <div className="facility-item">
                <span className="number">5</span>
                <div className="facility-text">
                  <h3>프랜차이즈 커피샵 존재</h3>
                  <p>유명 프랜차이즈 커피숍이 있어 미팅이나 업무를 위한 장소로 활용하기 좋습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityPick;

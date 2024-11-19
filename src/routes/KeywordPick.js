// KeywordPick.jsx
import React from 'react';
import Header from '../components/Header';
import './KeywordPick.css';
import { FaPalette, FaGuitar, FaUtensils, FaTshirt, FaGlassMartini } from 'react-icons/fa';

const KeywordPick = () => {
  return (
    <div className="keyword-wrapper">
      <Header />
      <div className="keyword-background">
        <img alt="background" src="/img/Back.png" className="background-image" />
        <h1 className="page-title">관심있는 지역정보</h1>
        <div className="keyword-container">
          <div className="location-card">
            <h2 className="location-name">홍익로 3길</h2>
            <div className="card-content">
              <div className="location-image">
                <img 
                  src="/img/Hongik.jpg" 
                  alt="지역 이미지" 
                  className="main-image"
                />
              </div>
              <div className="info-list">
                <div className="info-item">
                  <span className="number">1</span>
                  <div className="info-icon">
                    <FaPalette />
                  </div>
                  <div className="info-text">
                    <h3>예술과 문화</h3>
                    <p>홍대 지역의 중심으로, 다양한 예술 작품과 벽화가 있는 거리입니다. 독특한 분위기의 갤러리와 아트 카페가 많아 예술적 영감을 얻기에 좋은 장소입니다.</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="number">2</span>
                  <div className="info-icon">
                    <FaGuitar />
                  </div>
                  <div className="info-text">
                    <h3>젊음과 활기</h3>
                    <p>이 지역은 젊은 층이 많이 찾는 곳으로, 거리 공연과 다양한 이벤트가 끊이지 않는 활기찬 분위기를 자랑합니다.</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="number">3</span>
                  <div className="info-icon">
                    <FaUtensils />
                  </div>
                  <div className="info-text">
                    <h3>다양한 먹거리</h3>
                    <p>홍익로 3길은 전통 음식점부터 트렌디한 푸드트럭까지 다양한 맛집이 밀집해 있는 미식가들의 천국입니다.</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="number">4</span>
                  <div className="info-icon">
                    <FaTshirt />
                  </div>
                  <div className="info-text">
                    <h3>스트리트 패션</h3>
                    <p>개성 넘치는 패션 아이템과 빈티지 상점들이 많아, 패션에 관심 있는 사람들이 즐겨 찾는 곳입니다.</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="number">5</span>
                  <div className="info-icon">
                    <FaGlassMartini />
                  </div>
                  <div className="info-text">
                    <h3>밤 문화</h3>
                    <p>밤이 되면 라이브 클럽, 바, 펍 등이 활기를 띠며, 다양한 나이트라이프를 즐길 수 있는 명소입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordPick;
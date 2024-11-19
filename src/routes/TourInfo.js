// TourInfo.jsx
import React from 'react';
import './TourInfo.css';
import Header from "../components/Header";

function TourInfo() {
  const tourSpots = [
    {
      id: 1,
      name: '남산타워',
      description: '서울 전경을 볼 수 있는 명소입니다.',
      image: '/img/namsan_tower.jpg',
      recommendations: 102,
    },
    {
      id: 2,
      name: '경복궁',
      description: '조선시대의 대표적인 궁궐입니다.',
      image: '/img/gyeongbokgung.jpg',
      recommendations: 87,
    },
    {
      id: 3,
      name: '한강공원',
      description: '도심 속 힐링 장소로 유명합니다.',
      image: '/img/hanriver_park.jpg',
      recommendations: 76,
    },
  ];

  return (
    <div className="tour-wrapper">
      <Header />
      <div className="tour-background">
        <img alt="background" src="/img/Back.png" className="background-image" />
        <div className="tour-container">
          <div className="page-header">
            <h1 className="page-title">동네 관광정보</h1>
            <p className="page-subtitle"></p>
          </div>
          
          <div className="tour-grid">
            {tourSpots.map((spot) => (
              <div key={spot.id} className="tour-item">
                <div className="tour-content">
                  <div className="tour-image-container">
                    <img src={spot.image} alt={spot.name} className="tour-image" />
                  </div>
                  <div className="tour-info">
                    <h2>{spot.name}</h2>
                    <p className="description">{spot.description}</p>
                    <p className="recommendations">추천수: {spot.recommendations}</p>
                    <button className="detail-button">상세보기</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourInfo;

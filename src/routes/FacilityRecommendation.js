import React, { useState } from "react";
import axios from 'axios';
import Header from "../components/Header"; // 이미 있는 Header 컴포넌트 임포트
import "./FacilityRecommendation.css"; // 스타일시트 파일

function FacilityRecommendation() {
  const [location, setLocation] = useState(""); // 위치 입력 상태 관리
  const [facility, setFacility] = useState(""); // 편의시설 입력 상태 관리
  const [radius, setRadius] = useState(""); // 반경 입력 상태 관리

  // "분석하기" 버튼을 클릭했을 때 호출되는 함수
  const handleAnalysis = () => {
    if (!location || !facility || !radius) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 위치와 편의시설을 합친 값
    const combinedInput = `${location} ${facility}`;

    // 백엔드에 보낼 데이터를 구성
    const requestData = {
      keywordList: [combinedInput],
      radius: parseInt(radius, 10)
    };

    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem('accessToken'); 

    // Axios를 사용해 API 요청 보내기
    axios.post('/find/keyword', requestData, {
      headers: {
        Authorization: `Bearer ${token}` // Authorization 헤더에 토큰 추가
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="facility-recommendation-wrapper">
      <Header /> {/* 헤더 추가 */}
      <div className="facility-recommendation-background">
        <img alt="background" src="/img/Back.png" className="facility-background-img" />
        <div className="facility-content-container">
          <h2>편의시설 추천</h2>
          <div className="facility-input-container">
            <input
              type="text"
              placeholder="위치를 입력하세요"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="편의시설을 입력하세요"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
            />
            <input
              type="number"
              placeholder="반경 (0~20000)"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              min="0"
              max="20000"
            />
            <button onClick={handleAnalysis}>분석하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityRecommendation;

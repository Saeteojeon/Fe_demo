import React, { useState } from "react";
import axios from 'axios';
import Header from "../components/Header"; 
import "./FacilityRecommendation.css"; 
import { useNavigate } from 'react-router-dom'; 

function FacilityRecommendation() {
  const [location, setLocation] = useState(""); 
  const [facility, setFacility] = useState(""); 
  const [radius, setRadius] = useState(""); 
  const navigate = useNavigate(); 

  const handleAnalysis = () => {
    if (!location || !facility || !radius) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const combinedInput = `${location} ${facility}`;

    const requestData = {
      keywordList: [combinedInput],
      radius: parseInt(radius, 10)
    };

    axios.post('http://3.37.102.94/find/keyword/', requestData)
      .then(response => {
        console.log("POST 요청 결과 데이터:", response.data);

        // 데이터를 state로 넘겨서 navigate
        navigate('/FacilityDetailPage', { state: { facilityData: response.data } });
      })
      .catch(error => {
        console.error("POST 요청 실패:", error);
        alert("서버에 데이터를 전송하는 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="facility-recommendation-wrapper">
      <Header />
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

// FacilityRecommendation.jsx
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
        navigate('/FacilityDetailPage', { state: { facilityData: response.data } });
      })
      .catch(error => {
        console.error("POST 요청 실패:", error);
        alert("서버에 데이터를 전송하는 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="facility-wrapper">
      <Header />
      <div className="facility-background">
        <img alt="background" src="/img/Back.png" className="background-image" />
        <div className="facility-container">
          <div className="page-header">
            <h1 className="page-title">편의시설 추천</h1>
            <p className="page-subtitle">.</p>
          </div>

          <div className="input-section">
            <div className="input-box">
              <div className="input-group">
                <label>위치</label>
                <input
                  type="text"
                  placeholder="위치를 입력하세요"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label>편의시설</label>
                <input
                  type="text"
                  placeholder="편의시설을 입력하세요"
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label>반경 (m)</label>
                <input
                  type="number"
                  placeholder="반경 (0~20000)"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  min="0"
                  max="20000"
                />
              </div>

              <button className="analysis-button" onClick={handleAnalysis}>
                분석하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityRecommendation;

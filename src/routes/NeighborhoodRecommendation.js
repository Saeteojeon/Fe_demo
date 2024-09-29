// NeighborhoodRecommendation.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // 이미 있는 Header 컴포넌트 임포트
import "./NeighborhoodRecommendation.css"; 

function NeighborhoodRecommendation() {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  // 검색 버튼 클릭 시 호출되는 함수
  const handleSearch = async () => {
    if (!location || !keyword) {
      alert("위치와 키워드를 모두 입력해주세요.");
      return;
    }

    const combinedInput = `${location} ${keyword}`;
    //const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

    try {
      const response = await axios.post(
        "http://3.37.102.94//find/town",
        {
          keywordList: [combinedInput],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${token}`, // Authorization 헤더에 Bearer 토큰 추가
          },
        }
      );

      navigate("/NeighborhoodResultPage", { state: response.data }); // 동네추천결과페이지로 이동
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  return (
    <div className="neighborhood-recommendation-container">
      <Header /> {/* 기존에 구현된 Header 컴포넌트 사용 */}
      <h2>동네추천 서비스</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="지정할 위치를 설정해주세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="원하시는 키워드를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <button onClick={handleSearch} className="search-button">검색하기!</button>
      
      <div className="map-placeholder">
        <img src="/img/map.png" alt="Map Placeholder" className="map-image"/>
        <p>Explore the interactive map to find popular spots and plan your next adventure.</p>
      </div>
    </div>
  );
}

export default NeighborhoodRecommendation;

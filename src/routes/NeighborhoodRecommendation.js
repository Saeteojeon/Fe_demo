import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "./NeighborhoodRecommendation.css";

function NeighborhoodRecommendation() {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!location || !keyword) {
      alert("위치와 키워드를 모두 입력해주세요.");
      return;
    }

    // API 요청 데이터 형식 수정
    const requestData = {
      question: `${location}에 ${keyword}`
    };

    try {
      console.log("요청 데이터:", requestData); // 요청 데이터 로깅

      const response = await axios.post(
        "http://3.37.102.94/find/town",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
          }
        }
      );

      console.log("API 응답:", response.data); // 응답 데이터 로깅

      if (response.data && response.data.answer && response.data.keywordList) {
        navigate("/NeighborhoodResultPage", {
          state: {
            answer: response.data.answer,
            keywordList: response.data.keywordList
          }
        });
      } else {
        throw new Error("응답 데이터 형식이 올바르지 않습니다.");
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      alert("추천 결과를 가져오는 데 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="neighborhood-recommendation-container">
      <Header />
      <h2>동네추천 서비스</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="위치를 입력해주세요 (예: 홍대)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="원하시는 조건을 입력해주세요 (예: 조용한 동네를 추천해주세요!)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <button 
        onClick={handleSearch} 
        className="search-button"
      >
        검색하기!
      </button>

      <div className="map-placeholder">
        <img 
          src="/img/map.png" 
          alt="지도 미리보기" 
          className="map-image" 
        />
        <p>인기 명소를 찾아보고 원하는 동네를 찾아보세요!</p>
      </div>
    </div>
  );
}

export default NeighborhoodRecommendation;
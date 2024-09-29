import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header"; // 이미 구현된 Header 컴포넌트 임포트
import "./NeighborhoodResultPage.css";

function NeighborhoodResultPage() {
  const [keywordList, setKeywordList] = useState([]);
  const [locationData, setLocationData] = useState([]);

  // 페이지 로드 시 API에서 데이터 가져오기
  useEffect(() => {
    const fetchNeighborhoodData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://3.37.102.94/find/town", {
          headers: {
            //'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        const { keywordList, locations } = response.data; // keywordList와 위치 데이터를 API 응답에서 직접 가져옵니다.
        setKeywordList(keywordList);
        setLocationData(locations); // 이때 locations에는 location, description, lat, lng 정보가 포함되어야 합니다.

        // 카카오맵 스크립트 로드
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=2aae91b28b781cb3b44e0df398b6ff00&autoload=false`;
        script.onload = () => {
          window.kakao.maps.load(() => {
            initializeMap(locations);
          });
        };
        document.head.appendChild(script);

      } catch (error) {
        console.error("Error fetching neighborhood data:", error);
      }
    };

    fetchNeighborhoodData();
  }, []);

  // 카카오 맵 초기화 함수
  const initializeMap = (locations) => {
    const mapContainer = document.getElementById("resultMap");
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 기본 위치
      level: 5, // 맵 레벨
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 서버에서 받아온 위치 데이터로 마커 생성
    locations.forEach((place) => {
      const markerPosition = new window.kakao.maps.LatLng(place.lat, place.lng);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    });
  };

  return (
    <div className="neighborhood-result-container">
      <Header /> {/* 기존에 구현된 Header 컴포넌트 사용 */}
      <h2>동네 추천 결과</h2>
      
      <div className="keyword-list">
        {keywordList.map((keyword, index) => (
          <span key={index} className="keyword-bubble">
            {keyword}
          </span>
        ))}
      </div>

      <div className="result-wrapper">
        <div id="resultMap" className="map-container"></div>
        <div className="description-list">
          {locationData.map((location, index) => (
            <div key={index} className="description-item">
              <h3>{location.location}</h3>
              <p>{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NeighborhoodResultPage;

// NeighborhoodResultPage.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NeighborhoodResultPage.css";

const { kakao } = window;

function NeighborhoodResultPage() {
  const locationState = useLocation();
  const { keywordList, flaskResponseDto } = locationState.state;

  // 카카오 맵 초기화
  useEffect(() => {
    const mapContainer = document.getElementById("resultMap"); 
    const mapOption = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 5,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 전달받은 location 값을 이용해 마커 표시
    flaskResponseDto.forEach((place) => {
      const markerPosition = new kakao.maps.LatLng(place.lat, place.lng);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    });
  }, [flaskResponseDto]);

  return (
    <div className="neighborhood-result-container">
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
          {flaskResponseDto.map((location, index) => (
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

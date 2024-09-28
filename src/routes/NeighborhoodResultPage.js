// NeighborhoodResultPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NeighborhoodResultPage.css";
import Header from "../components/Header"; 

const NeighborhoodResultPage = () => {
  const [keywordList, setKeywordList] = useState([]);
  const [locationData, setLocationData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token
        const response = await axios.get("/api/your-endpoint", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setKeywordList(response.data.keywordList);
        setLocationData(response.data.flaskResponseDto);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Initialize Kakao Map
  useEffect(() => {
    const loadKakaoMapScript = () => {
      return new Promise((resolve) => {
        if (window.kakao && window.kakao.maps) {
          resolve(window.kakao);
        } else {
          const script = document.createElement('script');
          script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=2aae91b28b781cb3b44e0df398b6ff00&autoload=false`;
          script.onload = () => {
            window.kakao.maps.load(() => {
              resolve(window.kakao);
            });
          };
          document.head.appendChild(script);
        }
      });
    };

    const initializeMap = async () => {
      await loadKakaoMapScript();

      const mapContainer = document.getElementById("resultMap");
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 5,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // Markers for each location
      locationData.forEach((place) => {
        const markerPosition = new window.kakao.maps.LatLng(place.lat, place.lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    if (locationData.length > 0) {
      initializeMap();
    }
  }, [locationData]);

  return (
    <div className="neighborhood-result-container">
      <Header />
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
};

export default NeighborhoodResultPage;

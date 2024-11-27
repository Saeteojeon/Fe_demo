import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./NeighborhoodResultPage.css";

function NeighborhoodResultPage() {
  const { state } = useLocation();
  const [map, setMap] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infowindows, setInfowindows] = useState([]);

  const data = state || { answer: [], keywordList: [] };
  
  const keywords = [...new Set(
    data.keywordList
      .filter(keyword => keyword && typeof keyword === 'string')
      .map(keyword => keyword.replace(/[\[\]]/g, '').trim())
      .filter(keyword => keyword.length > 0)
  )];

  const loadKakaoMapScript = () => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve(window.kakao);
        return;
      }
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=2aae91b28b781cb3b44e0df398b6ff00&autoload=false&libraries=services`;
      script.onload = () => window.kakao.maps.load(() => resolve(window.kakao));
      script.onerror = () => reject(new Error('카카오맵 스크립트 로드 실패'));
      document.head.appendChild(script);
    });
  };

  const initializeMap = async () => {
    try {
      if (!data.answer || data.answer.length === 0) return;

      const kakao = await loadKakaoMapScript();
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 3
      };
      
      const newMap = new kakao.maps.Map(container, options);
      setMap(newMap);

      const geocoder = new kakao.maps.services.Geocoder();
      const bounds = new kakao.maps.LatLngBounds();
      const newMarkers = [];
      const newInfowindows = [];

      const geocodePromises = data.answer.map((item, index) => {
        return new Promise((resolve) => {
          const locationName = item.location.split('.')[1]?.trim() || item.location;
          
          geocoder.addressSearch(locationName, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              
              const markerImage = new kakao.maps.MarkerImage(
                'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png',
                new kakao.maps.Size(36, 37),
                {
                  spriteSize: new kakao.maps.Size(36, 691),
                  spriteOrigin: new kakao.maps.Point(0, (index * 46) + 10),
                  offset: new kakao.maps.Point(13, 37)
                }
              );

              const marker = new kakao.maps.Marker({
                map: newMap,
                position: coords,
                image: markerImage
              });

              const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:5px;width:150px;text-align:center;">
                  <strong>${index + 1}. ${locationName}</strong>
                </div>`
              });

              kakao.maps.event.addListener(marker, 'mouseover', () => {
                infowindow.open(newMap, marker);
              });

              kakao.maps.event.addListener(marker, 'mouseout', () => {
                infowindow.close();
              });

              bounds.extend(coords);
              newMarkers.push(marker);
              newInfowindows.push(infowindow);
            }
            resolve();
          });
        });
      });

      await Promise.all(geocodePromises);
      
      if (newMarkers.length > 0) {
        newMap.setBounds(bounds);
        
        const currentLevel = newMap.getLevel();
        if (currentLevel < 3) {
          newMap.setLevel(3);
        } else if (currentLevel > 7) {
          newMap.setLevel(7);
        }
      }

      setMarkers(newMarkers);
      setInfowindows(newInfowindows);
    } catch (error) {
      console.error("지도 초기화 오류:", error);
    }
  };

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
    const filtered = data.answer.filter(item => 
      item.location.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    initializeMap();
    setFilteredData(data.answer);
  }, [data]);

  return (
    <>
      {/* Header를 최상단에 위치 */}
      <Header />
  
      {/* ResultPage 구조 */}
      <div className="neighborhood-result-page">
        <div className="content-wrapper">
          {/* 키워드 버튼 */}
          <div className="keyword-container">
            {keywords.map((keyword, index) => (
              <button
                key={index}
                className={`keyword-button ${
                  selectedKeyword === keyword ? "active" : ""
                }`}
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword}
              </button>
            ))}
          </div>
  
          {/* 지도와 추천 리스트 */}
          <div className="content-container">
            <div id="map" className="map-container" />
            <div className="result-list">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className={`result-item ${
                    selectedKeyword &&
                    (item.location
                      .toLowerCase()
                      .includes(selectedKeyword.toLowerCase()) ||
                      item.description
                        .toLowerCase()
                        .includes(selectedKeyword.toLowerCase()))
                      ? "active"
                      : ""
                  }`}
                >
                  <h3 className="result-location">
                    <span className="location-number">{index + 1}</span>
                    {item.location}
                  </h3>
                  <p className="result-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
  
  export default NeighborhoodResultPage;
  
import React, { useEffect, useState } from "react";
import axios from 'axios'; // axios 가져오기
import "./FacilityDetailPage.css"; // 스타일시트 가져오기

function FacilityDetailPage() {
  const [facilityDetailList, setFacilityDetailList] = useState([]);
  const [facilityDetailMap, setFacilityDetailMap] = useState(null);
  const [facilityDetailMapMarkers, setFacilityDetailMapMarkers] = useState([]);

  // 카카오맵 API 스크립트 로드
  const loadKakaoMapScript = () => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve(window.kakao);
      } else {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=2aae91b28b781cb3b44e0df398b6ff00&autoload=false&libraries=services,clusterer,drawing`; 
        script.onload = () => {
          window.kakao.maps.load(() => {
            console.log("카카오 맵 스크립트가 성공적으로 로드되었습니다.");
            resolve(window.kakao);
          });
        };
        script.onerror = () => {
          console.error("카카오 맵 스크립트를 로드하는 중 오류가 발생했습니다.");
          reject(new Error("카카오 맵 스크립트를 로드하는 중 오류가 발생했습니다."));
        };
        document.head.appendChild(script);
      }
    });
  };

  // 더미 데이터 사용
  const loadMockData = () => {
    const mockData = [
      {
        id: 1,
        place_name: "이마트24 R홍대기숙사점",
        address_name: "서울 마포구 양화로 45",
        road_address_name: "서울 마포구 양화로 45",
        place_url: "http://place.map.kakao.com/123456",
        x: "126.923541",
        y: "37.550937"
      },
      {
        id: 2,
        place_name: "CU 홍대입구역점",
        address_name: "서울 마포구 어울마당로 7",
        road_address_name: "서울 마포구 어울마당로 7",
        place_url: "http://place.map.kakao.com/654321",
        x: "126.923291",
        y: "37.551837"
      },
      {
        id: 3,
        place_name: "GS25 홍대모스점",
        address_name: "서울 마포구 와우산로21길 17",
        road_address_name: "서울 마포구 와우산로21길 17",
        place_url: "http://place.map.kakao.com/789101",
        x: "126.922341",
        y: "37.552337"
      },
      {
        id: 4,
        place_name: "프랜차이즈 커피샵 존재",
        address_name: "서울 마포구 와우산로29길 18",
        road_address_name: "서울 마포구 와우산로29길 18",
        place_url: "http://place.map.kakao.com/111213",
        x: "126.921341",
        y: "37.553137"
      }
    ];

    setFacilityDetailList(mockData);

    if (mockData.length > 0) {
      const positions = mockData.map((facility) => ({
        id: facility.id,
        title: facility.place_name,
        latlng: new window.kakao.maps.LatLng(facility.y, facility.x),
        address: facility.address_name,
        roadAddress: facility.road_address_name,
        url: facility.place_url
      }));

      displayFacilityDetailMarkers(positions);
    }
  };

  // 카카오 맵 초기화 및 마커 표시
  const displayFacilityDetailMarkers = (positions) => {
    if (facilityDetailMap) {
      facilityDetailMapMarkers.forEach(marker => marker.setMap(null)); // 이전 마커 제거
      const markers = positions.map((position) => {
        const marker = new window.kakao.maps.Marker({
          position: position.latlng,
          title: position.title
        });

        marker.setMap(facilityDetailMap);

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${position.title}</div>`
        });

        window.kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.open(facilityDetailMap, marker);
        });

        return marker;
      });
      setFacilityDetailMapMarkers(markers);
    }
  };

  useEffect(() => {
    const initializeMap = async () => {
      const kakao = await loadKakaoMapScript();

      const container = document.getElementById('facilityDetailMap');
      const options = {
        center: new kakao.maps.LatLng(37.551337, 126.923041),
        level: 3
      };
      const newMap = new kakao.maps.Map(container, options);
      setFacilityDetailMap(newMap);
    };

    initializeMap(); // 카카오 맵 초기화
  }, []);

  useEffect(() => {
    if (facilityDetailMap) {
      loadMockData();
    }
  }, [facilityDetailMap]);

  return (
    <div className="facility-detail-page-container">
      <h2>편의시설 추천</h2>
      <div className="facility-detail-page-wrapper">
        <div id="facilityDetailMap" className="facility-detail-map"></div>
        <div className="facility-detail-list">
          <h3>추천된 편의시설 목록</h3>
          <ul>
            {facilityDetailList.map((facility, index) => (
              <li key={facility.id} onClick={() => {
                const marker = facilityDetailMapMarkers[index];
                facilityDetailMap.panTo(marker.getPosition());
              }}>
                <strong>{index + 1}. {facility.place_name}</strong><br />
                <span>{facility.road_address_name || facility.address_name}</span><br />
                <a href={facility.place_url} target="_blank" rel="noopener noreferrer">상세보기</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FacilityDetailPage;

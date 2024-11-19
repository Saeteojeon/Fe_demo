

    // Community.js
    import React, { useState, useEffect } from 'react';
    import Header from "../components/Header";
    import './Community.css';

    const regionData = [
        {
            region: "서울",
            coordinates: { lat: 37.5665, lng: 126.9780 },
            communities: [
                { title: "홍대 인근의 '연남동'", description: "연남동을 중심으로 한 카페거리와 맛집들을 소개합니다.", postCount: 156, likes: 230 },
                { title: "삼청동 한옥마을", description: "전통과 현대가 공존하는 삼청동의 매력적인 장소들을 공유합니다.", postCount: 98, likes: 180 },
                { title: "강남 문화생활", description: "강남 지역의 전시, 공연, 문화 이벤트 정보를 공유하는 공간입니다.", postCount: 123, likes: 167 },
                { title: "이태원 다이닝", description: "이태원의 다양한 세계 음식점과 분위기 좋은 바를 소개합니다.", postCount: 87, likes: 134 },
                { title: "성수동 카페거리", description: "성수동의 힙한 카페들과 맛집 정보를 공유합니다.", postCount: 167, likes: 192 },
                { title: "북촌 한옥마을", description: "북촌의 전통 가옥과 현대적 카페의 조화를 소개합니다.", postCount: 92, likes: 141 },
                { title: "망원동 맛집투어", description: "망원동의 숨은 맛집과 카페를 소개합니다.", postCount: 76, likes: 128 },
                { title: "서촌 골목길", description: "서촌의 역사적인 골목길과 맛집을 소개합니다.", postCount: 145, likes: 173 },
                { title: "여의도 한강공원", description: "여의도 한강공원의 계절별 즐길 거리를 소개합니다.", postCount: 89, likes: 147 },
                { title: "압구정 로데오", description: "압구정 로데오의 쇼핑과 카페 정보를 공유합니다.", postCount: 112, likes: 156 },
                { title: "광장시장 맛집", description: "광장시장의 전통 맛집과 숨은 맛집을 소개합니다.", postCount: 134, likes: 182 },
                { title: "가로수길 카페", description: "가로수길의 트렌디한 카페와 맛집을 소개합니다.", postCount: 178, likes: 195 }
            ]
        },
        {
            region: "경기도",
            coordinates: { lat: 37.4138, lng: 127.5183 },
            communities: [
                { title: "수원화성 탐방", description: "수원화성의 역사와 관광 포인트를 공유합니다.", postCount: 145, likes: 178 },
                { title: "가평 펜션", description: "가평의 추천 펜션과 주변 관광지를 소개합니다.", postCount: 167, likes: 189 },
                { title: "일산 호수공원", description: "일산 호수공원의 계절별 즐길 거리를 소개합니다.", postCount: 98, likes: 145 },
                { title: "광명동굴", description: "광명동굴의 다양한 체험과 볼거리를 공유합니다.", postCount: 76, likes: 134 },
                { title: "양평 드라이브", description: "양평의 드라이브 코스와 카페를 추천합니다.", postCount: 123, likes: 167 },
                { title: "포천 아트밸리", description: "포천 아트밸리의 명소와 주변 맛집을 소개합니다.", postCount: 89, likes: 142 },
                { title: "파주 출판도시", description: "파주 출판도시의 책방과 카페를 소개합니다.", postCount: 134, likes: 172 },
                { title: "연천 여행", description: "연천의 관광지와 맛집 정보를 공유합니다.", postCount: 67, likes: 131 },
                { title: "이천 도자기마을", description: "이천 도자기마을 체험과 구경 포인트를 공유합니다.", postCount: 92, likes: 148 },
                { title: "김포 문화예술", description: "김포의 문화예술 공간과 행사 정보를 공유합니다.", postCount: 78, likes: 136 },
                { title: "용인 테마파크", description: "용인의 테마파크 이용 팁과 후기를 공유합니다.", postCount: 156, likes: 184 },
                { title: "안산 다문화거리", description: "안산의 다문화 음식거리 맛집을 소개합니다.", postCount: 112, likes: 158 }
            ]
        },
        {
            region: "충청도",
            coordinates: { lat: 36.6372, lng: 127.4913 },
            communities: [
                { title: "대전 성심당", description: "대전 성심당의 인기 메뉴와 새로운 제품을 소개합니다.", postCount: 189, likes: 195 },
                { title: "청주 술박물관", description: "청주 술박물관 투어와 시음 후기를 공유합니다.", postCount: 87, likes: 142 },
                { title: "공주 한옥마을", description: "공주 한옥마을의 볼거리와 맛집을 소개합니다.", postCount: 123, likes: 165 },
                { title: "천안 독립기념관", description: "천안 독립기념관 관람 포인트와 주변 맛집을 공유합니다.", postCount: 96, likes: 148 },
                { title: "단양 패러글라이딩", description: "단양 패러글라이딩 체험 후기와 팁을 공유합니다.", postCount: 78, likes: 136 },
                { title: "보령 머드축제", description: "보령 머드축제 즐기는 방법과 팁을 공유합니다.", postCount: 145, likes: 176 },
                { title: "충청도 맛집", description: "충청도의 숨은 맛집과 향토 음식을 소개합니다.", postCount: 167, likes: 189 },
                { title: "아산 지중해마을", description: "아산 지중해마을 포토스팟과 카페를 소개합니다.", postCount: 92, likes: 145 },
                { title: "태안 해안여행", description: "태안의 아름다운 해안가 드라이브 코스를 공유합니다.", postCount: 134, likes: 167 },
                { title: "논산 딸기농장", description: "논산 딸기농장 체험과 맛집 정보를 공유합니다.", postCount: 89, likes: 143 },
                { title: "계룡산 등산", description: "계룡산 등산 코스와 준비물을 공유합니다.", postCount: 112, likes: 156 },
                { title: "부여 궁남지", description: "부여 궁남지의 계절별 모습과 관광 팁을 공유합니다.", postCount: 98, likes: 147 }
            ]
        }
    ];


    function Community() {
        const [selectedRegion, setSelectedRegion] = useState(null);
        const [map, setMap] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const postsPerPage = 10;
    
        const loadKakaoMapScript = () => {
            return new Promise((resolve, reject) => {
                if (window.kakao && window.kakao.maps) {
                    resolve(window.kakao);
                    return;
                }
                const script = document.createElement('script');
                script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=2aae91b28b781cb3b44e0df398b6ff00&autoload=false&libraries=services`;
                script.onload = () => window.kakao.maps.load(() => resolve(window.kakao));
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };
    
        const initializeMap = async () => {
            try {
                const kakao = await loadKakaoMapScript();
                const container = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(36.5, 127.5), // 고정할 중심 좌표 (한국 중심 좌표)
                    level: 13, // 줌 레벨 고정
                    draggable: false, // 지도 드래그 비활성화
                    scrollwheel: false, // 스크롤 줌 비활성화
                    disableDoubleClickZoom: true, // 더블클릭 줌 비활성화
                };
        
                const newMap = new kakao.maps.Map(container, options);
                setMap(newMap);
        
                regionData.forEach((region) => {
                    const position = new kakao.maps.LatLng(region.coordinates.lat, region.coordinates.lng);
        
                    const content = document.createElement('div');
                    content.className = `region-marker ${selectedRegion?.region === region.region ? 'active' : ''}`;
                    content.innerHTML = region.region;
        
                    const customOverlay = new kakao.maps.CustomOverlay({
                        position,
                        content,
                        map: newMap,
                    });
        
                    // 클릭 이벤트로 지역 전환 및 색상 변경
                    content.addEventListener('click', () => {
                        document.querySelectorAll('.region-marker').forEach((marker) => {
                            marker.classList.remove('active');
                        });
                        content.classList.add('active');
                        setSelectedRegion(region);
                        setCurrentPage(1);
                    });
                });
        
                // 지도 상의 불필요한 컨트롤 제거
                newMap.setZoomable(false); // 줌 컨트롤 비활성화
            } catch (error) {
                console.error('지도 초기화 오류:', error);
            }
        };
    
        useEffect(() => {
            initializeMap();
        }, [selectedRegion]);
    
        return (
            <div className="community-page">
                <Header />
                <div className="content-wrapper">
                    <div className="map-section">
                        <div id="map" className="map-container"></div>
                        <div className="region-buttons">
                            {regionData.map((region, index) => (
                                <button
                                    key={index}
                                    className={`region-button ${selectedRegion?.region === region.region ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedRegion(region);
                                        setCurrentPage(1);
                                    }}
                                >
                                    {region.region}
                                </button>
                            ))}
                        </div>
                    </div>
    
                    {selectedRegion && (
                        <div className="community-section">
                            <h2>{selectedRegion.region} 커뮤니티</h2>
                            <div className="community-cards">
                                {selectedRegion.communities
                                    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
                                    .map((community, index) => (
                                        <div key={index} className="community-card">
                                            <div className="card-header">
                                                <h3>{community.title}</h3>
                                                <span className="post-count">게시글 {community.postCount}</span>
                                            </div>
                                            <p>{community.description}</p>
                                            <div className="card-footer">
                                                <span className="likes">
                                                    <i className="far fa-heart"></i> {community.likes}
                                                </span>
                                                <button className="join-button">참여하기</button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            
                            <div className="pagination">
                                {Array.from(
                                    { length: Math.ceil(selectedRegion.communities.length / postsPerPage) },
                                    (_, i) => (
                                        <button
                                            key={i}
                                            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    export default Community;
    
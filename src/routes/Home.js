import React from "react";
import Header from "../components/Header";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

// 카드에 표시될 데이터들을 배열로 정의
const cardsData = [
    { emoji: "⭐️", title: "마이 페이지", desc: "내 활동 보기", button: "프로필 수정", path: "Mypage" },
    { emoji: "💡", title: "동네 추천", desc: "맞춤 동네를 추천해드려요!", button: "지금 탐색", path: "NeighborhoodRecommendation" },
    { emoji: "👫", title: "커뮤니티", desc: "동네 주민 환영해요!", button: "참여하기", path: "Community" },
    { emoji: "🔍", title: "동네 관광지 검색", desc: "지역 명소를 알려드려요!", button: "지금 검색", path: "TourInfo" },
    { emoji: "📸", title: "AI 사진 스튜디오", desc: "이미지를 추천해드려요!", button: "컬렉션 보기", path: "AIphoto" },
];



function Home() {
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용

    // 경로 이동을 위한 공통 함수 정의
    const handleNavigation = (path, id = "") => {
        navigate(`/${path}${id ? `/${id}` : ""}`);
    };

    return (
        <main>
            <Header />
            <section className="analysis text-center">
                <div>
                    <h2>Welcome to Neighborhood Explorer</h2>
                    <p>저희 새터전은 랭체인 서비스를 이용한 AI를 활용하여 동네를 추천해드리고</p>
                    <p>편의 시설과 이미지 분석을 통한 다양한 사용자 맞춤 서비스를 제공해드립니다!</p>
                    <button className="button" onClick={() => handleNavigation('FacilityRecommendation')}>분석하러 가기</button>
                </div>
                <div className="images">
                    <img src="/img/Back.png" alt="Neighborhood Image" />
                </div>
            </section>

            <section className="explore-section text-center">
                <h2>Explore</h2>
                <div className="explore-cards">
                    {cardsData.map((card, index) => (
                        <div key={index} className="card" onClick={() => handleNavigation(card.path)} role="button" tabIndex="0">
                            <p>{card.emoji}</p>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <button className="button">{card.button}</button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;

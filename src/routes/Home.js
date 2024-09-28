import React from "react";
import Header from "../components/Header";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

// 카드에 표시될 데이터들을 배열로 정의
const cardsData = [
    { emoji: "⭐️", title: "My Page", desc: "View your activities", button: "Edit Profile", path: "FacilityDetailPage" },
    { emoji: "💡", title: "Neighborhood Recommendations", desc: "Get tailored suggestions", button: "Explore Now", path: "NeighborhoodRecommendation" },
    { emoji: "👫", title: "Community", desc: "Connect with neighbors", button: "Create or Join", path: "NeighborhoodResultPage" },
    { emoji: "🔍", title: "Neighborhood Tourism Search", desc: "Explore local spots", button: "Search Now", path: "tourism-search" },
    { emoji: "📸", title: "AI Photo Studio", desc: "Discover amazing photos", button: "View Collection", path: "photo-studio" },
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

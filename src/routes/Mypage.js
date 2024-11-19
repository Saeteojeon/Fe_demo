// Mypage.jsx
import React, { useState } from 'react';
import './Mypage.css';
import Header from '../components/Header';

function Mypage() {
  const [profile, setProfile] = useState({
    name: '윤영선',
    email: 'yys@naver.com',
    bio: '마포구 와우산로',
    profileImage: '/img/basicprofile.png',
  });

  const myFavorites = [
    { id: 1, title: '남산타워', description: '서울 전경을 볼 수 있는 곳' },
    { id: 2, title: '경복궁', description: '조선시대의 궁궐' },
    { id: 3, title: '한강공원', description: '도심 속 힐링 장소' },
  ];

  const myPosts = [
    { id: 1, title: '나의 첫 여행 후기', date: '2024-10-01' },
    { id: 2, title: '맛집 투어 후기', date: '2024-09-28' },
  ];

  const visitedPlaces = [
    { id: 1, place: '제주도', description: '아름다운 섬' },
    { id: 2, place: '부산 해운대', description: '여름에 꼭 가봐야 할 해수욕장' },
  ];

  return (
    <div className="mypage-wrapper">
      <Header />
      <div className="mypage-background">
        <img alt="background" src="/img/Back.png" className="background-image" />
        <div className="mypage-container">
          <div className="page-header">
            <h1 className="page-title">마이페이지</h1>
          </div>

          <div className="profile-section">
            <img src={profile.profileImage} alt="Profile" className="profile-image" />
            <div className="profile-details">
              <h2>{profile.name}</h2>
              <p className="profile-email">{profile.email}</p>
              <p className="profile-bio">{profile.bio}</p>
              <button className="edit-button">프로필 수정</button>
            </div>
          </div>

          <div className="content-grid">
            <div className="content-section">
              <h2>내가 찜한 목록</h2>
              <ul className="content-list">
                {myFavorites.map((item) => (
                  <li key={item.id} className="content-item">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>내가 작성한 글 목록</h2>
              <ul className="content-list">
                {myPosts.map((post) => (
                  <li key={post.id} className="content-item">
                    <strong>{post.title}</strong>
                    <span className="date">{post.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>내가 가본 곳</h2>
              <ul className="content-list">
                {visitedPlaces.map((place) => (
                  <li key={place.id} className="content-item">
                    <strong>{place.place}</strong>
                    <p>{place.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;

// FavoritePick.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import './FavoritePick.css';

const FavoritePick = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Header />
      <div className="favorite-background">
        <img 
          alt="background" 
          src="/img/Back.png" 
          className="background-image" 
        />
        <div className="favorite-container">
          <h1 className="page-title">대표 찜 설정</h1>
         

          <div className="favorite-grid">
            <div className="favorite-card">
              <div className="image-container">
                <img 
                  src="/img/Favorite1.jpg" 
                  alt="Favorite 1" 
                  className="favorite-image"
                />
              </div>
              <h2>이태원 테라스 카페</h2>
              <p>이태원 언덕 위에 위치한 '테라스 카페'는 넓은 야외 테라스와 아름다운 서울 시내 전망으로 유명합니다. 신선한 브런치 메뉴와 다양한 디저트를 제공하며, 특히 저녁에는 분위기 있는 조명 아래에서 특별한 시간을 보낼 수 있습니다. 친구, 연인과 함께 여유로운 시간을 보내기에 이상적인 장소입니다.</p>
            </div>

            <div className="favorite-card">
              <div className="image-container">
                <img 
                  src="/img/Favorite2.jpg" 
                  alt="Favorite 2" 
                  className="favorite-image"
                />
              </div>
              <h2>경복궁 전통 찻집</h2>
              <p>경복궁 근처에 위치한 '전통 찻집'은 한옥의 고즈넉한 분위기 속에서 다양한 전통 차와 디저트를 즐길 수 있는 곳입니다. 방문객에게 편안함과 정취를 선사하며, 창밖으로 보이는 작은 정원이 특별함을 더합니다. 힐링과 여유를 즐기고 싶은 분들에게 추천합니다.</p>
            </div>

            <div className="favorite-card">
              <div className="image-container">
                <img 
                  src="/img/Favorite3.jpg" 
                  alt="Favorite 3" 
                  className="favorite-image"
                />
              </div>
              <h2>부산 해운대 오션뷰 레스토랑</h2>
              <p>부산 해운대에 위치한 '오션뷰 레스토랑'은 탁 트인 바다 전망을 자랑하며, 신선한 해산물 요리를 제공합니다. 실내와 야외 좌석을 모두 갖추고 있으며, 해 질 무렵 바다 위로 떨어지는 석양이 특히 아름답습니다. 특별한 날에 로맨틱한 분위기를 원한다면 꼭 방문해보세요.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritePick;

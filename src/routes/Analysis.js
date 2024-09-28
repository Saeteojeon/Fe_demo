// Analysis.js
import React, { useState } from 'react';
import Header from "../components/Header";
import './Analysis.css'; // 스타일링을 위한 CSS 파일을 명확하게 변경

function AnalysisPage() { // 컴포넌트 이름 변경
  const [location, setLocation] = useState('');
  const [facility, setFacility] = useState('');
  const [radius, setRadius] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location || !facility || !radius) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch('http://3.37.102.94/find/keyword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location,
          facility,
          radius: parseFloat(radius),
        }),
      });

      if (!response.ok) {
        throw new Error('API 요청에 실패했습니다.');
      }

      const result = await response.json();
      console.log("분석 결과:", result);

      alert('분석이 완료되었습니다! 콘솔에서 결과를 확인하세요.');
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      alert('분석 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <Header />
      <div className="analysis-page-container">
        <h2>분석 페이지</h2>
        <form onSubmit={handleSubmit} className="analysis-page-form">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="위치를 입력하세요: 홍대" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="편의시설을 입력하세요: 편의점" 
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input 
              type="number" 
              placeholder="반경:" 
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">분석하기</button>
        </form>
      </div>
    </div>
  );
}

export default AnalysisPage; // 컴포넌트 이름 변경

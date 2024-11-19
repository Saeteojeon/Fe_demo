// Result.jsx
import React from 'react';
import './Result.css';

const Result = ({ data }) => {
  const { answer, keywordList } = data;

  return (
    <div className="result-container">
      <div className="locations-section">
        <h2>분석된 장소</h2>
        {answer.map((item, index) => (
          <div key={index} className="location-card">
            <h3>{item.location}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="keywords-section">
        <h2>검출된 키워드</h2>
        <div className="keyword-tags">
          {keywordList.map((keyword, index) => (
            <span key={index} className="keyword-tag">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
// AIphoto.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Result from './Result';
import './AIphoto.css';

const AIphoto = () => {
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // 이미지 미리보기 URL 생성
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !location) {
      alert('위치와 이미지를 모두 입력해주세요.');
      return;
    }
    
    setIsLoading(true);
    const formData = new FormData();
    formData.append('location', location);
    formData.append('imageFile', image);

    try {
      const response = await fetch('http://3.37.102.94/find/image', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('서버 응답에 문제가 있습니다.');
      }
      
      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error('Error:', error);
      alert('이미지 분석 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setLocation('');
    setImage(null);
    setPreviewUrl(null);
    setAnalysisResult(null);
  };

  return (
    <>
      <Header />
      <div className="aiphoto-background">
        <img alt="background" src="/img/Back.png" className="facility-background-img" />
        <div className="aiphoto-container">
          <h1 className="page-title">AI 사진관</h1>
          
          {!isLoading ? (
            <>
              <div className="upload-section">
                <form onSubmit={handleSubmit} className="upload-form">
                  <div className="input-group">
                    <input
                      type="text"
                      value={location}
                      onChange={handleLocationChange}
                      placeholder="위치를 입력하세요"
                      className="location-input"
                    />
                  </div>
                  
                  <div className="input-group">
                    <label className="file-input-label">
                      <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="file-input"
                      />
                      {image ? '이미지 변경' : '이미지 업로드'}
                    </label>
                    {image && <span className="file-name">{image.name}</span>}
                  </div>

                  {previewUrl && (
                    <div className="image-preview">
                      <img src={previewUrl} alt="Preview" />
                    </div>
                  )}

                  <div className="button-group">
                    <button type="submit" className="submit-button">
                      분석하기
                    </button>
                    {analysisResult && (
                      <button type="button" onClick={resetForm} className="reset-button">
                        새로운 분석하기
                      </button>
                    )}
                  </div>
                </form>
              </div>
              {analysisResult && <Result data={analysisResult} />}
            </>
          ) : (
            <div className="loading-section">
              <div className="loading-text">AI가 분석중 ...</div>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIphoto;
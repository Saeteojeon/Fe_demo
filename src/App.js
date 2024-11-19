/*
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import EmailVerification from "./routes/EmailVerification";
import Completed from "./routes/Completed";
import NotFound from "./routes/NotFound";
import FacilityRecommendation from "./routes/FacilityRecommendation";
import FacilityDetailPage from "./routes/FacilityDetailPage";
import NeighborhoodRecommendation from "./routes/NeighborhoodRecommendation";
import NeighborhoodResultPage from "./routes/NeighborhoodResultPage";
import Community from "./routes/Community";
import Mypage from "./routes/Mypage";
import TourInfo from "./routes/TourInfo";
import Mypick from "./routes/Mypick";
import FavoritePick from "./routes/FavoritePick";
import KeywordPick from "./routes/KeywordPick";
import FacilityPick from "./routes/FacilityPick";
import AIphoto from "./routes/AIphoto";
import Result from "./routes/Result";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/Completed" element={<Completed />} />
        <Route path="/FacilityRecommendation" element={<FacilityRecommendation />} />
        <Route path="/FacilityDetailPage" element={<FacilityDetailPage />} />
        <Route path="/NeighborhoodRecommendation" element={<NeighborhoodRecommendation />} />
        <Route path="/NeighborhoodResultPage" element={<NeighborhoodResultPage />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/TourInfo" element={<TourInfo />} />
        <Route path="Mypick" element={<Mypick />} />
        <Route path="FavoritePick" element={<FavoritePick />} />
        <Route path="KeywordPick" element={<KeywordPick />} />
        <Route path="FacilityPick" element={<FacilityPick />} />
        <Route path="AIphoto" element={<AIphoto />} />
        <Route path="Result" element={<Result />} />
        
      </Routes>
    </Router>
  );
}

export default App;
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
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Feast or Fast</h1>
      <p>Dummy text here...</p>
      <button onClick={() => { localStorage.setItem('debugMode', 'false'); navigate('/profile'); }}>Regular User</button>
      <button onClick={() => { localStorage.setItem('debugMode', 'true'); navigate('/profile'); }}>Debug User</button>
    </div>
  );
};

export default LandingPage;
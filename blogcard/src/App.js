// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Achievement from './Achievement/Achievement';
import Discussion from './Discussion/Discussion';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/" element={<Home />} /> {/* Optional: Default Home route */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Home Page</h1>; // You can customize this
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import './App.css';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details/:country" element={<Details />} />
    </Routes>
  </>
);

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Details from './components/pages/Details';
import './App.css';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:country" element={<Details />} />
      </Routes>
    </Router>
  </>
);

export default App;

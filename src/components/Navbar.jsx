import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsMicFill, BsFillGearFill, BsCaretLeftFill } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {
        window.location.pathname === '/'
          ? (
            <button type="button">Home</button>
          )
          : (
            <button type="button" onClick={() => navigate(-1)}>
              <BsCaretLeftFill />
              Go Back
            </button>
          )
      }
      <span>COVID-19 TRACKER</span>
      <div className="header-actions">
        <span><BsMicFill /></span>
        <span><BsFillGearFill /></span>
      </div>
    </div>
  );
};

export default Navbar;

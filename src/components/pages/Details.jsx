import React from 'react';
import { useLocation } from 'react-router';

const Details = () => {
  const location = useLocation();

  const {
    flag,
    country,
    cases,
    recovered,
    tests,
    population,
    deaths,
    active,
    critical,
    testPerPeople,
    casePerPeople,
    deathPerPeople,
  } = location.state;

  return (
    <div>
      <img className="details-flag" src={flag} alt="flag" />
      <div className="detail-container">
        <p>
          Name :
          {country}
        </p>
        <p>
          Cases :
          {cases}
        </p>
        <p>
          Tests :
          {tests}
        </p>
        <p>
          Recovered :
          {recovered}
        </p>
        <p>
          Active :
          {active}
        </p>
        <p>
          Critical :
          {critical}
        </p>
        <p>
          Population :
          {population}
        </p>
        <p>
          CasePerPeople :
          {casePerPeople}
        </p>
        <p>
          TestPerPeople :
          {testPerPeople}
        </p>
        <p>
          DeathPerPeople :
          {deathPerPeople}
        </p>
        <p>
          Total Death :
          {deaths}
        </p>
      </div>
    </div>
  );
};

export default Details;

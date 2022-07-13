import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { BsArrowRightCircle } from 'react-icons/bs';
// import { GiAfrica, GiWorld } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { fetchCountryData } from '../../redux/Covid';
import Hero from '../Hero';
import Spinner from '../Spinner';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryData());
  }, []);

  const countriesData = useSelector((state) => state.countriesData);
  const loading = useSelector((state) => state.loader);
  const filteredCountriesData = countriesData.filter((data) => (data.continent === 'Africa'));
  const [postCountry, setCountry] = useState('');
  const searchCountry = (country) => setCountry(country);

  return (
    <section className="body">
      <Hero />
      {/* <div className="home-banner">
        <span className="world-map"><GiWorld /></span>
        <div className="banner-text">
          <p className="banner-title">Covid statistics</p>
          <p className="place">AFRICA</p>
          <span className="map-unique"><GiAfrica /></span>
        </div>
      </div> */}
      <div className="main-container">
        <span className="search-container">
          <FiSearch />
        </span>
        <input placeholder="search country..." onChange={(e) => searchCountry(e.target.value)} />
      </div>
      {loading && <Spinner />}
      <div className="countries-container">
        <ul className="countries-list">
          {
            filteredCountriesData.filter((value) => value.name
              .toLowerCase().includes(postCountry
                .toLocaleLowerCase())).map((data) => (
                  <Link
                    to={`/details/${data.name}`}
                    key={data.name}
                    className="card-country"
                    state={data.country === null ? ''
                      : {
                        country: data.name,
                        flag: data.flag,
                        cases: data.cases,
                        tests: data.tests,
                        recovered: data.recovered,
                        active: data.active,
                        critical: data.critical,
                        testPerPeople: data.testPerPeople,
                        casePerPeople: data.casePerPeople,
                        deathPerPeople: data.deathPerPeople,
                        deaths: data.deaths,
                        population: data.population,
                      }}
                  >
                    <div className="country-info">
                      <div className="right-arrow"><BsArrowRightCircle /></div>
                      <img src={data.flag} alt={data.country} className="country-img" />
                      <div className="info">
                        <p className="country-capital">{data.name}</p>
                        <p>{data.cases}</p>
                      </div>
                    </div>
                  </Link>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchCountryData } from '../../redux/Covid';
import Hero from '../Hero';

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
      <div className="main-container">
        <div className="search">
          <input placeholder="search country..." onChange={(e) => searchCountry(e.target.value)} />
          <FiSearch className="search_icon" />
        </div>
        {loading && <div className="loader">.</div>}
        <div className="countries-container">
          <ul className="countries-list">
            {
              filteredCountriesData.filter((value) => value.name.toLowerCase()
                .includes(postCountry.toLocaleLowerCase()))
                .map((data) => (
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
                      <img src={data.flag} alt={data.name} />
                    </div>
                    <div className="info">
                      <h3>{data.name}</h3>
                      <p>{data.cases}</p>
                    </div>
                  </Link>
                ))
            }
          </ul>
        </div>

      </div>

    </section>
  );
};

export default Home;

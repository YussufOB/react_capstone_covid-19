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
  const filteredCountriesData = countriesData.filter((data) => (data.continent === 'Africa'));
  const [postCountry, setCountry] = useState('');
  const searchCountry = (country) => setCountry(country);

  return (
    <>
      <Hero />
      <section>
        <div className="search">
          <FiSearch />
          <input placeholder="search country..." onChange={(e) => searchCountry(e.target.value)} />
        </div>
        <div className="data_display">
          <ul className="country_list">
            {
              filteredCountriesData.filter((value) => value.name
                .toLowerCase().includes(postCountry
                  .toLocaleLowerCase())).map((data) => (
                    <Link
                      to={`/details/${data.name}`}
                      key={data.name}
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
                      <div>
                        <div><BsArrowRightCircle /></div>
                        <img src={data.flag} alt={data.country} />
                        <div>
                          <p>{data.name}</p>
                          <p>{data.cases}</p>
                        </div>
                      </div>
                    </Link>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;

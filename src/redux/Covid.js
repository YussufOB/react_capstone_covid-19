import axios from 'axios';
import { onFailure, onSuccess, onRequest } from './Loaders';

const APIUrl = 'https://disease.sh/v3/covid-19/countries';
const GET_COVID_BY_COUNTRY = 'COVID-19 by Country/GET_COVID_BY_COUNTRY';

export const getDataByCountry = (payload) => ({ type: GET_COVID_BY_COUNTRY, payload });

export const fetchCountryData = () => async (dispatch) => {
  dispatch(onRequest());

  try {
    const response = await axios.get(APIUrl);
    const data = await response.data;
    const countriesData = [];

    data.forEach((item) => {
      countriesData.push({
        id: item.countryInfo[0],
        continent: item.continent,
        name: item.country,
        flag: item.countryInfo.flag,
        cases: item.cases,
        tests: item.tests,
        deaths: item.deaths,
        recovered: item.recovered,
        active: item.active,
        population: item.population,
        critical: item.critical,
        testPerPeople: item.oneTestPerPeople,
        casePerPeople: item.oneCasePerPeople,
        deathPerPeople: item.oneDeathPerPeople,
      });
    });
    dispatch(getDataByCountry(countriesData));
    dispatch(onSuccess());
  } catch (error) {
    dispatch(onFailure);
  }
};

export default function covidReducer(state = [], action) {
  switch (action.type) {
    case GET_COVID_BY_COUNTRY:
      return action.payload;
    default:
      return state;
  }
}

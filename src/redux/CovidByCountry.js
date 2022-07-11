import axios from 'axios';

const GET_COUNTRY_STAT = 'Covid-19 tracker/GET_COUNTRY_STAT';

export const getCovidCountry = (payload) => ({ type: GET_COUNTRY_STAT, payload });

export const fetchCountryStat = (countryName) => async (dispatch) => {
  const APIUrl = `https://disease.sh/v3/covid-19/countries/${countryName}`;
  const response = await axios.get(APIUrl);
  const data = await response.data;
  dispatch(getCovidCountry(data));
};

export default function countryReducer(state = [], action) {
  switch (action.type) {
    case GET_COUNTRY_STAT:
      return action.payload;
    default:
      return state;
  }
}

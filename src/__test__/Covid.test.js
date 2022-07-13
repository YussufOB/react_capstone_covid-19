import { getDataByCountry, fetchCountryData } from '../redux/Covid';

const GET_COVID_BY_COUNTRY = 'COVID-19 by Country/GET_COVID_BY_COUNTRY';
const reducerAction = (payload) => ({ type: GET_COVID_BY_COUNTRY, payload });

describe('test if country reducer properly', () => {
  it('return array of data from API', async () => {
    const dataArr = fetchCountryData;
    expect(dataArr.length).toBe(0);
  });

  it('render object instance of reducer', () => {
    expect(getDataByCountry(reducerAction.payload)).toBeInstanceOf(Object);
  });
});

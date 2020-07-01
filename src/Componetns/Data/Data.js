import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
  const changeableUrl = country ? `${url}/countries/${country}`: url;

  try{
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
    return {confirmed, recovered, deaths, lastUpdate};
  }
  catch(err){
    console.log(err);
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(dailyData => ({confirmed: dailyData.confirmed.total, deaths: dailyData.deaths.total, date: dailyData.reportDate}))
  } catch (error) {
    return error;
  }
};

export const fetchCountry = async () =>{
  try{
    const {data: {countries}}  = await axios.get(`${url}/countries`);
    return countries.map(item => item.name);
  }
  catch(err){
    console.log(err);
  }
}


export const TableCountryName =  async () =>{
  try{
    const {data:{Countries}} = await axios.get('https://api.covid19api.com/summary');
    return Countries;
  }
  catch(err){
    console.log(err)
  }
}

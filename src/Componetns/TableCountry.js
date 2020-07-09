import React, { useEffect,useState } from 'react';
import {TableCountryName} from './Data/Data';

const TableCountry = () =>{
  const [tempcountryData,settempCountryData] = useState([])
  useEffect(()=>{
    const coutryMyApi = async () =>{
      settempCountryData(await TableCountryName())
    }
    coutryMyApi()

  },[]);

  return(
    <div className='container'>

      {
        tempcountryData.length !== 0?
        <React.Fragment>
          <div className='col-md-10 mx-auto'>
            <h3 className='pt-3'>Reported Cases and Deaths by Country, Territory, or Conveyance</h3>
            <p className='py-3'>The <strong>coronavirus</strong> COVID-19 is affecting <strong>213 countries and territories</strong>around the world and 2 international conveyances. <strong>The day is reset after midnight GMT+0.</strong>The list of countries and territories and their continental regional classification is based on the
            <a href='https://unstats.un.org/unsd/methodology/m49/'>United Nations</a></p>
          </div>
          <table className="table table-bordered mt-5">
            <thead>
              <tr className='font-weight-bold'>
                <th scope="col">#</th>
                <th scope="col">Country Other</th>
                <th scope="col">Total Cases</th>
                <th scope="col">New Cases</th>
                <th scope='col'>Total Deaths</th>
                <th scope="col">New Deaths</th>
                <th scope="col">Total Recoverd</th>
                <th scope='col'>New Recoverd </th>
                <th scope="col">Active Cases</th>
              </tr>
            </thead>
        <tbody>
          {
            tempcountryData.map((item, i )=> <tr className='font-weight-bold' key={i}>
                                              <th scope='row'>{i+1}</th>
                                              <td className='text-center'>{item.Country}</td>
                                              <td className='text-right'> {item.TotalConfirmed} </td>
                                              <td className='text-right bg-warning'>+{item.NewConfirmed}</td>
                                              <td className='text-right'>{item.TotalDeaths} </td>
                                              <td className='text-right bg-danger'>{item.NewDeaths > 0 ? '+' + item.NewDeaths: 0} </td>
                                              <td className='text-right'> {item.TotalRecovered} </td>
                                              <td className='text-right'> {item.NewRecovered} </td>
                                              <td className='text-right'> {(item.TotalConfirmed - (item.TotalDeaths + item.TotalRecovered))}</td>
                                            </tr>)
          }

        </tbody>
        </table>
        </React.Fragment>: <h6 className='text-center'>Loading...</h6>
      }
    </div>
  )
}

export default TableCountry;

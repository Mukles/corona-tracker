import React, { useEffect, useState } from 'react';
import {fetchDailyData} from './Data/Data';
import {Consumer} from './context'
import { Line,Bar } from 'react-chartjs-2';

const GrapChart = () =>{
  //State
  const [dailyData, setdailyData] = useState([]);

  //Call the Api
  useEffect(() =>{
    const fetchMyApi = async () =>{
      setdailyData(await fetchDailyData());
    }
    fetchMyApi();
  },[]);

  return (
    <Consumer>
      {
        value =>{
          const {data:{confirmed,recovered,deaths}, country} = value
          return(
            <div className='container'>
            {country ? (
              <Bar className='mb-5 pb-5' data={{labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{label: 'People',
                                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                    data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
            }


            {dailyData.length? <Line className='mb-5'
             data={{
               labels: dailyData.map(({ date }) => date),
               datasets: [{
                 data: dailyData.map((data) => data.confirmed),
                 label: 'Infected',
                 borderColor: '#3333ff',
                 fill: true,
               }, {
                 data: dailyData.map((data) => data.deaths),
                 label: 'Deaths',
                 borderColor: 'red',
                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
                 fill: true,
               },
               ],
             }}
           />: null}
        </div>
          )
        }
      }

    </Consumer>
  )
}

export default GrapChart;

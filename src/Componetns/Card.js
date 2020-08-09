import React from 'react';
import Loader from 'react-loader-spinner';
import CountUp from 'react-countup';

const Card = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{
  if(!confirmed){
    return(
      <div className='contianer text-center'>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    
    )
  }
  return (
    <React.Fragment>
      <section id='card-data' className='mb-5'>
        <div className='container'>
          <div className='col-md-6 col-lg-10 mx-auto'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card p-4'>
                  <div className='card-body'>
                    <h5>Infected: </h5>
                    <h3><CountUp start={0} end={confirmed.value} delay={0}></CountUp></h3>
                    <h6 className='text-muted font-italic'>{new Date(lastUpdate).toLocaleString()}</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card p-4'>
                  <div className='card-body'>
                    <h5>Recovered: </h5>
                    <h3><CountUp start={0} end={recovered.value} delay={0}></CountUp></h3>
                    <h6 className='text-muted font-italic'>{new Date(lastUpdate).toLocaleString()}</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card p-4'>
                  <div className='card-body'>
                    <h5 >Deaths: </h5>
                    <h3 ><CountUp start={0} end={deaths.value} delay={0}></CountUp></h3>
                    <h6 className='text-muted font-italic'>{new Date(lastUpdate).toLocaleString()}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Card;

import React,{ useEffect, useState} from 'react';
import { fetchCountry } from './Data/Data'

const CounteryPiker = ({onchage}) =>{
  const [countery, setCountery] = useState([]);
  useEffect(() =>{
    const fetchCountryApi = async () =>{
      setCountery(await fetchCountry());
    }
    fetchCountryApi()
  },[]);

  return (
    <React.Fragment>
    <div style={{width: '206px', border: '2px solid #07090914',borderRadius: '5px',color: '#71777d'}}  className="form-group ml-lg-auto align-self-center mb-0">
      <select id="inputState" className="form-control border-0" onChange={(e) => onchage(e.target.value)}>
        <option value="">Global</option>
        {countery.length?countery.map((item, i)=> <option value={item} key={i}>{item}</option>):null}
      </select>
    </div>
    </React.Fragment>
  )
}

export default CounteryPiker;

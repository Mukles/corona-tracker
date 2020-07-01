import React from 'react';
import {Consumer} from './context';
import CounteryPiker from './CounteryPiker';

const MobileNav = () =>{
  return(
    <React.Fragment>
      <div className='mobile-sidebar d-flex border-right w-100 d-lg-none'>
        <ul className='flex-coloum navbar-nav pl-4 pr-5 w-100 align-items-center mb-5'>
          <li className='nav-item h5 text-warning text-center'>Coronavirus</li>
          <li className='nav-item h6 py-3 text-center'>Population</li>
          <Consumer>
          {
            value => {
              const { onchage } = value;
              return(
                <li className='nav-item'><CounteryPiker onchage={onchage}/> </li>
              )
            }
          }
          </Consumer>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default MobileNav;

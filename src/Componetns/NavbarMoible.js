import React from 'react';
import CounteryPiker from './CounteryPiker';
import logo from '../image.png';
import { Consumer } from './context';
const NavbarMobile = () =>{
  return(
      <section id='nav-bar' className='mb-4'>
      <Consumer>
        {
          value=>{
            const { onchage, handleClick } = value;
            return(
              <div className='border-bottom'>
                <nav className='navbar navbar-expand-lg navbar-light px-md-5 mx-md-5 py-3'>
                  <img src={logo} alt='corona' className='navbar-brand img-fluid' style={{width: '120px'}} />
                  <button onClick={handleClick}  className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className='collapse navbar-collapse'>
                  <ul className='navbar-nav ml-auto align-items-center'>
                    <li className='nav-item text-warning nav-link h5'>Coronavirus</li>
                    <li className='nav-item text-muted nav-link h6 mr-5'>Population</li>
                    <li className='nav-item'><CounteryPiker onchage={onchage}/> </li>
                  </ul>
                </div>
              </nav>
            </div>
            )
          }
        }
      </Consumer>
    </section>

  )
}

export default NavbarMobile;

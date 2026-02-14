import React from 'react';
import './nav.css';
import Navbtn from '../common/navbtn';

const Nav = () => {
  return ( 
    <nav>
      <div className='logo1'></div>
      <div className='navcont'>
        <Navbtn text="About Us" />
        <Navbtn text="Investor Relations" />
        <Navbtn text="Responsible Banking" />
        <Navbtn text="Newsroom" />
        <Navbtn text="Learning Center" />
        <Navbtn text="Careers" />
        <Navbtn text="Others" />
      </div>
    </nav>
  );
};

export default Nav;
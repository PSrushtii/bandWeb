import React, {useEffect} from 'react';
import './Albums.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';


function Albums() {

  useEffect(()=>{
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
    });
  },[]);

  return (
    <div className='menuSec' id='menuId'>
        <h1>Albums</h1>
        <div className='Albums1'>
          <Link
          to='/menu'
          >
            <img src='images/Albums1.jpg' alt='menu1'data-aos="slide-right" data-aos-duration="10000" data-aos-once='true' />
            </Link>
        </div>
    </div>
  )
}

export default Albums
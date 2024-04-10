import React , {useState} from 'react';
import './Footer.css';
import {Button} from './../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {

  const [clicked , setClicked] = useState(false);
  const [mail, setMail] = useState('');

  const checkClick = () =>{
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(!emailRegex.test(mail))
    {
      setClicked(false);
    }
    else setClicked(true);
  };

  const handleSubmit = event =>{
    event.preventDefault();
    const mailer = mail;
    const res = fetch(
      'https://band-30dea-default-rtdb.firebaseio.com/userSubscription.json',
      {
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          mailer
        })
    }
    );

    if(res){
      setMail('');
    }
    else{
      setClicked(false)
    }
  }
  

  return (
    <div className='footer-container' id='contactPage'>
      <div className={clicked ? 'footer-subscription-vanish' : 'footer-subscription'}>
        <p className='footer-subscription-heading'>
          Join the newsletter to know about the band.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              onChange={event => setMail(event.target.value)}
            />
            <Button buttonStyle='btn--outline' onClick={checkClick}>Subscribe</Button>
          </form>
        </div>
      </div>
      <p className={clicked ? 'footer-subscription': 'vanish'}>Thank you for subscribing !!!</p>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <p>Started in 2010</p>
          </div>
          <div class='footer-link-items'>
            <h2>Based in</h2>
            <p>LONDON</p>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p>noitcerideno0102@gmail.com</p>
            <p>+91 8003717845</p>
            <p>+0831 9078</p>
          </div>
          <div class='footer-link-items'>
          <Link target="_blank" to='https://www.google.com/maps/dir//Kinglet+Studios,+Svartensgatan+8,+116+20+Stockholm,+Sweden/@59.2211464,16.07668,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465f77fb185443e7:0xe6a82c5e508117!2m2!1d18.0732892!2d59.3173872?entry=ttu'>
            <img src='images\map.png' alt='map' className='img-map'/>
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ONE DIRECTION
             
            </Link>
          </div>
          <small class='website-rights'>COPYRIGHTS © 1D</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-spotify' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.youtube.com/user/OneDirectionVEVO9'
              target='_blank'
              aria-label='YouTube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.instagram.com/onedirection/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/onedirection'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

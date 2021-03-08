import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Millions of people learning and staying aware of our world
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              BUPP
              <i class="fab fa-centos" />
            </Link>
          </div>

          <small class='website-rights'>Brunel university © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              aria-label='Facebook'
              target="_blank"
              >
            <a target="_blank" href="https://www.facebook.com/">
            <i class='fab fa-facebook-f' /></a>
            </Link>

            <Link
              class='social-icon-link instagram'
              aria-label='Instagram'
              target="_blank"
            >
            <a target="_blank" href="https://www.instagram.com/"  rel="https://www.instagram.com/">
            <i class='fab fa-instagram' /></a>
            </Link>

            <Link
              class='social-icon-link youtube'
              aria-label='Youtube'
              target="_blank"
            >
             <a target="_blank" href="https://www.youtube.com/"  rel="https://www.youtube.com/">
             <i class='fab fa-youtube' /></a>
            </Link>

            <Link
              class='social-icon-link twitter'
              aria-label='Twitter'
              target="_blank"

            >
              <a target="_blank" href="https://www.twitter.com/"  rel="https://www.twitter.com/">
              <i class='fab fa-twitter' /></a>
            </Link>

            <Link
              class='social-icon-link linkedin'
              aria-label='LinkedIn'
              target="_blank"
            >
              <a target="_blank" href="https://www.linkedin.com/"  rel="https://www.linkedin.com/">
              <i class='fab fa-linkedin' /></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

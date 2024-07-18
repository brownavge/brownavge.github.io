import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import guitars from '../images/guitars.jpg';
import richard_talking from '../images/richard_talking.jpg';
import saxes from '../images/saxes.jpg';
import Component from '../components/RyansComponent.js';

const Home = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false}>
        <div>
          <img className='background-img' src={guitars} alt="Guitars" />
        </div>
        <div>
          <img className='background-img' src={richard_talking} alt="richard talking" />
        </div>
        <div>
          <img className='background-img' src={saxes} alt="saxes" />
        </div>
      </Carousel>
      <div className="overlay"></div>
      <div className="centered">
        <Component></Component>
        <p style={{ fontSize: '20px' }}>BROWN UNIVERSITY X RISD'S</p>
        <p style={{ fontSize: '50px' }}><b>ANIME VIDEO GAME ENSEMBLE</b></p>
      </div>
    </div>
  );
};

export default Home;

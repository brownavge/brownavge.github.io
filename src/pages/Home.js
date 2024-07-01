import React from 'react';
import guitars from'../images/guitars.jpg';
 

const Home = () => {
  // const navbar = document.querySelector('.navbar');
  // let top = navbar.offsetTop;

  // function stickynavbar() {
  //   if (window.scrollY >= top) {    
  //     navbar.classList.add('sticky');
  //   } else {
  //     navbar.classList.remove('sticky');    
  //   }
  // }
  // window.addEventListener('scroll', stickynavbar);
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <img src={guitars} alt="guitars.jpg" />
      <div class="overlay"></div>
      <div className="centered">
        <p style={{ fontSize: '20px' }}>BROWN UNIVERSITY X RISD'S</p>
        <p style={{ fontSize: '50px' }}><b>ANIME VIDEO GAME ENSEMBLE</b></p>
      </div>
      
      
    </div>
  );
};

export default Home;
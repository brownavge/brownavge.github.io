import React, { useState } from 'react';
import ConcertModal from '../components/ConcertModal.js';
import Fall22 from '../images/poster_f22.jpg';
import Spring23 from '../images/poster_s23.jpg';
import Fall23 from '../images/poster_f23.png';
import Spring24 from '../images/poster_s24.png';
import Spring22 from '../images/poster_s22.jpg';
import F23Program from '../images/program_f23.pdf';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import richard_talking from '../images/richard_talking.jpg';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const concerts = [
    {
      id: 4,
      title: 'Spring 2024 Concert',
      image: Spring24,
      date: 'Monday, May 6, 2024 in Riley Hall',
      description: "AVGE's largest concert to date, featuring twenty-four small ensembles and over 80 unique performers. A big thank you to Brown Ground Breakin', who featured in a collaboration in a 7pm Small Ensemble. This concert stood out as a uniquely sentimental one, as we said goodbye to a record number (16!) of graduating seniors and grad students, including our very own Johann Dizon, one of the founders of AVGE.",
      matineeList: 'Weight of the World (NieR: Automata) • Fire Emblem Map Medley • Shitsuren, Sincerely (Summertime Rendering, Violet Evergarden) • Is There Still Anything That Love Can Do? (Weathering With You) • Tonight Stars an Easygoing Egoist (Touhou 15) • Genshin Impact Medley • Fly, My Wings (Limbus Company) • Arknights Medley • Innocence (Katawa Shojo) • Country Roads (Whisper of the Heart) • Unravel (Tokyo Ghoul)',
      matineeSmalls: ['K719Z9QRDr8', 'cVpCxgUqSGs', 'BPqMePeV8Sc', 'fYLY-NQY8y0', 'eHwqwFtnTs4', 'IBJ7-ShWZcc', 'ozPT0On_7SU', 'cI4D9qmFHrc', 'vveX6BgB_Ho', '20U5Mp36Cws', 'zUx4pz82E7o'],
      eveningList: "Shelter • Anytime Anywhere (Frieren) • Fireworks Festival (Weathering With You) • Yuri on Ice • Never Forget (Bocchi The Rock!) • Message of Rouge (Kiki's Delivery Service) • Gwyn Lord of Cynder (Dark Souls) • Mute City (Mario Kart 8) • Bitter Eyes (Flip of Light) • Baka Mitai (Yakuza 0) • Lost in Paradise (Jujutsu Kaisen)",
      eveningSmalls: ['zx5L6pGXv2g', 'pwliKfkFT3A', '4ttQkWiVF54', 'Pv9Ai7npyPk', 'NGPSXyQsnEk', '1lc5fFcBSag', 'jN06WQWWwsI', 'YeygveYOzIw', 'vSBNWKse4bg', 'Jidz-pQEMvg', 'qszbZh_xFWQ'],
      largeList: 'Journey of a Lifetime (Frieren) • Dearly Beloved (Kingdom Hearts) • Selections from Tears of the Kingdom (Legend of Zelda: TOTK) • Kingdom of Predators (Hunter X Hunter) • Hopes and Dreams (Undertale) • T-kt (Attack on Titan) • God Shattering Star (Fire Emblem: Three Houses) • My Neighbor Totoro',
      large: ['x1SRUJCB2XE', 'zPKk89_tPIU', 'gx7VG4nKUsM', 'P89ArVNOJa8', 'PnZHHoN85xU', '3wxPOQDEwmk', 'hNwU0cvZmt4', 'UtRBCSPJytI', '7LxQ_E9xR1k'],
      full: ['kcfWnKEZGXk', 'f9DrHikQUvk'],
      setlist: 'https://drive.google.com/file/d/1FJW-5aob0H9rFSMuf-Our36e84pxX8qB/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'Fall 2023 Concert',
      image: Fall23,
      date: "Saturday, December 2 in Riley Hall",
      description: "AVGE's first performance in Riley Hall of the Lindemann Performing Arts Center at Brown. This concert marked the beginning of many things; it featured our first use of projector media and our first collaboration, that with Gendo Taiko in one of our Large Ensemble pieces. This was also our first concert series with separate matinee and evening performances due to an overwhelming surge in small ensemble registration as well as audience support.",
      matineeList: 'In Wonderment of Winter (Ori and the Will of the Wisps) • Where We Used To Be (Xenoblade Chronicles 2) • Kick Back (Chainsaw Man) • Kamado Tanjiro no Uta (Demon Slayer) • Everything Goes On (League of Legends) • Coconut Mall / Megalovania (Mario Kart Wii / Undertale) • Uchiage Hanabi (Fireworks) • Morose Dreamer (Blue Archive) • To the Beginning (Fate/Zero) • Idol (Oshi no Ko)',
      matineeSmalls: ['OKJop0bPlf8', 'DFwy_xrLtGg', 'agirUmi7ySM', 'inpylYUOC3U', 'k90GZ5xC6Vk', 'BdrbKOjyf5I', 'umUvJGAOBns', 'k8oWOEa0ieg', 'WWEmFKIqqAQ'],
      eveningList: "Seasons of Pelican Town (Stardew Valley) • Uchiage Hanabi (Fireworks) • Anna's Theme (When Marnie was There) • Gone Angels (Library of Ruina) • Kaze ni Naru (The Cat Returns) • Rock in the Velvet Room (Persona 5) • Isabella's Lullaby (The Promised Neverland) • If I Could be a Constellation (Bocchi the Rock!)",
      eveningSmalls: ['J9l7nibXi4E', 'egIrehVrgpg', '1HYqr657s04', 'GyZv-VTJJuc', 'D5H3j8IJFT0', '_2mqhtwynfQ', '8snj8banofo', 'mTcYLghHdOQ'],
      largeList: 'U.N. Owen Was Her? (Touhou 6) • Old Stories (Made in Abyss) • Castle in the Sky Medley • Violet Evergarden Medley • Inazuma (Genshin Impact) • Staff Roll (Super Mario Galaxy)',
      large: ['Ojg8KzYkRvs', '4fYT2F9AS5I', 'nSGqLfdxvjs', 'YHVuRO-7RlY', '3ncfTi75b3g', 'vnNGwmozsDU'],
      full: ['jRxH5fdHO7o', 'f9DrHikQUvk'],
      setlist: F23Program
    },
    {
      id: 2,
      title: 'Spring 2023 Concert',
      image: Spring23,
      date: 'Friday, April 28 in Alumnae Hall',
      description: "The birthplace of the iconic quote, 'This is the end of your merry-go-round of life... of college.' This semester also saw the start of AVGE's arranging team.",
      matineeList: '',
      matineeSmalls: [],
      eveningList: '',
      eveningSmalls: [],
      largeList: '',
      large: [],
      full: [],
      setlist: ''
    },
    {
      id: 1,
      title: 'Fall 2022 Concert',
      image: Fall22,
      date: 'Monday, December 5 in Alumnae Hall',
      description: "AVGE's first concert as an official ensemble. With a grand total of twenty performers across small and large ensemble, this group helped propel the club towards a bright and hopeful future!",
      matineeList: '',
      matineeSmalls: [],
      eveningList: '',
      eveningSmalls: [],
      largeList: '',
      large: [],
      full: [],
      setlist: ''
    },
    {
      id: 0,
      title: 'Spring 2022 Concert',
      image: Spring22,
      date: 'Sunday, April 17 in Petteruti Lounge',
      description: "AVGE's first semester of existence. This tight-knit group of six - Johann, Michelle, Richard, Renee, Ryan, and Sophia - began meeting weekly in the Steinert basement, and formed AVGE's first ensemble.",
      matineeList: '',
      matineeSmalls: [],
      eveningList: '',
      eveningSmalls: [],
      largeList: '',
      large: [],
      full: [],
      setlist: ''
    },
  ];

  const handlePosterClick = (concert) => {
    setSelectedConcert(concert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConcert(null);
  };

  return (
    <div>
      <div style={{ position: 'relative', height: '20vh', overflow: 'hidden' }}>
        <img className='background-img' style={{ objectPosition: '50% 400%' }} src={richard_talking} alt="Guitars" />
        <div className="overlay"></div>
        <div className="centered">
          <p style={{ fontSize: '50px', marginTop: '30%' }}>EVENTS</p>
        </div>
      </div>
      <div style={{ padding: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'black' }}>
        <div className="poster-container">
          {concerts.map(concert => (
            <div key={concert.id} className="poster-item" onClick={() => handlePosterClick(concert)} style={{ cursor: 'pointer' }}>
              <img src={concert.image} alt={concert.title} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
        {selectedConcert && (
          <ConcertModal
            show={showModal}
            handleClose={handleCloseModal}
            concert={selectedConcert}
          />
        )}
      </div>
    </div>
  );
};

export default Events;

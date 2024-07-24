import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import richard_talking from '../images/richard_talking.jpg';

const People = () => {
  const rosters = {
    '2023-2024': [
      { name: 'Renée Choi', instrument: 'Violin I', role: 'Concertmaster' },
      { name: 'David Han', instrument: 'Violin I', role: 'Assistant Concertmaster' },
      { name: 'Annika Brookman-Wang', instrument: 'Violin I' },
      { name: 'Sophia Chiu', instrument: 'Violin I' },
      { name: 'David Han', instrument: 'Violin I' },
      { name: 'Amy Sabpisal', instrument: 'Violin I' },
      { name: 'William Sun', instrument: 'Violin I' },
      { name: 'Sophia Zhang', instrument: 'Violin I' },
      { name: 'Emily Wang', instrument: 'Violin II', role: 'Section Leader'},
      { name: 'Hlib Burtsev', instrument: 'Violin II'},
      { name: 'Richard Dong', instrument: 'Violin II'},
      { name: 'Ryan Du', instrument: 'Violin II'},
      { name: 'Happy Ruth Jara', instrument: 'Violin II'},
      { name: 'Eric Ko', instrument: 'Violin II'},
      { name: 'Sarah Liao', instrument: 'Violin II'},
      { name: 'Ezra Rocha', instrument: 'Violin II'},
      { name: 'Ashley Toby', instrument: 'Viola'},
      { name: 'Chai Harsha', instrument: 'Viola'},
      { name: 'Emma Hsiao', instrument: 'Viola'},
      { name: 'Michelle Liu', instrument: 'Viola'},
      { name: 'Michael Tu', instrument: 'Cello', role: 'Section Leader'},
      { name: 'Julia Ceccarelli', instrument: 'Cello'},
      { name: 'Lou Taylor', instrument: 'Cello'},
      { name: 'Maria Wang', instrument: 'Cello'},
      { name: 'Andrew Furst', instrument: 'Trumpet', role: 'Section Leader'},
      { name: 'Filip Kaminski', instrument: 'Trumpet'},
      { name: 'Pran Teelucksingh', instrument: 'Trumpet'},
      { name: 'Anthony Boss', instrument: 'Trombone'},
      { name: 'Johann Dizon', instrument: 'Trombone'},
      { name: 'Jasmine Sun', instrument: 'French Horn'},
      { name: 'Victoria Chen', instrument: 'Flute', role: 'Section Leader, Piccolo'},
      { name: 'V Tamburello', instrument: 'Flute', role: 'Piccolo'},
      { name: 'V Tamburello', instrument: 'Flute', role: 'Piccolo'},
      { name: 'Isabella Chen', instrument: 'Flute' },
      { name: 'Edwin Lu', instrument: 'Flute' },
      { name: 'Julia Mei', instrument: 'Flute' },
      { name: 'Evelyn Wu', instrument: 'Flute' },
      { name: 'Shawn Zhu', instrument: 'Flute' },
    ],
    '2022-2023': [
      
    ],
  };

  const groupByInstrument = (members) => {
    return members.reduce((grouped, member) => {
      const { instrument } = member;
      if (!grouped[instrument]) {
        grouped[instrument] = [];
      }
      grouped[instrument].push(member);
      return grouped;
    }, {});
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <div style={{ position: 'relative', height: '20vh', overflow: 'hidden' }}>
        <img
          className='background-img'
          style={{ objectPosition: '50% 400%' }}
          src={richard_talking}
          alt="Guitars"
        />
        <div className="overlay"></div>
        <div className="centered">
          <p style={{ fontSize: '50px', marginTop: '30%' }}>PEOPLE</p>
        </div>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
        style={{ padding: '10vh' }}
      >
        <Tab eventKey="eboard" title="E-BOARD">
          {/* Add E-BOARD content here */}
        </Tab>
        <Tab eventKey="rosters" title="ROSTERS">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {Object.keys(rosters).map((year, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={year}>{year}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {Object.keys(rosters).map((year, index) => (
                    <Tab.Pane eventKey={year} key={index}>
                      <Row>
                        {Object.entries(groupByInstrument(rosters[year])).map(
                          ([instrument, members], idx) => (
                            <Col sm={4} key={idx}>
                              <h4 style={{ color: 'white' }}>{instrument}</h4>
                              <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {members.map((member, idx) => (
                                  <li key={idx} style={{ color: 'white' }}>
                                    {member.name} <i><span style={{ color: 'gray' }}>{member.role}</span></i>
                                  </li>
                                ))}
                              </ul>
                            </Col>
                          )
                        )}
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
        <Tab eventKey="alumni" title="ALUMNI">
          {/* Add ALUMNI content here */}
        </Tab>
      </Tabs>
    </div>
  );
};

export default People;

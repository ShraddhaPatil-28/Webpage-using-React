// import React from 'react'
import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

// import office_img from './office.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

function Services() {
  const [counterOn , setCounterOn] =  useState(false);

  const Count_auto=[
    {
      count_icon:<i class="fa-solid fa-gear" id='ICON_COUNT'></i>,
      count_point:<> {counterOn && <CountUp start={0} end={450} duration={2} delay={0}/>} +</>,
      name:<>WORK COMPLITED</>
    },
    {
      count_icon:<i class="fa-solid fa-users" id='ICON_COUNT'></i>,
      count_point:<>{counterOn && <CountUp start={0} end={25} duration={2} delay={0}/>}+</>,
      name:<>YEARS OF EXPERIENCE</>
    },
    {
      count_icon:<i class="fa-solid fa-champagne-glasses" id='ICON_COUNT'></i>,
      count_point:<> {counterOn && <CountUp start={0} end={550} duration={2} delay={0}/>}+</>,
      name:<>TOTAL CLIENTS</>
    },
    {
      count_icon:<i class="fa-solid fa-flag-checkered" id='ICON_COUNT'></i>,
      count_point:<>{counterOn && <CountUp start={0} end={48} duration={2} delay={0}/>}+</>,
      name:<>AWARD WON</>
    }
  ]
  const CARD_BODY=[
    {
      icon:<i class="fa-solid fa-briefcase" id='ICON'></i>,
      title:<>WEB DESIGN</>,
      para:<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, itaque. Nisi mollitia pariatur esse ut nesciunt quibusdam corrupti culpa a, consectetur cum inventore, quia eligendi placeat voluptas tenetur. Odit, magni.</>

    },
    {
      icon:<i class="fa-solid fa-check-to-slot" id='ICON'></i>,
      title:<>WEB DEVELOPMENT</>,
      para:<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, itaque. Nisi mollitia pariatur esse ut nesciunt quibusdam corrupti culpa a, consectetur cum inventore, quia eligendi placeat voluptas tenetur. Odit, magni.</>
    },
    {
      icon:<i class="fa-solid fa-camera-retro" id='ICON'></i>,
      title:<>PHOTOGRAPHY</>,
      para:<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, itaque. Nisi mollitia pariatur esse ut nesciunt quibusdam corrupti culpa a, consectetur cum inventore, quia eligendi placeat voluptas tenetur. Odit, magni.</>
    },
    {
      icon:<i class="fa-solid fa-microscope" id='ICON'></i>,
      title:<>RESPONSIVE DESIGN</>,
      para:<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, itaque. Nisi mollitia pariatur esse ut nesciunt quibusdam corrupti culpa a, consectetur cum inventore, quia eligendi placeat voluptas tenetur. Odit, magni.</>
    },
    {
      icon:<i class="fa-regular fa-sun" id='ICON'></i>,
      title:<>GRAPHIC DESIGN</>,
      para:<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, itaque. Nisi mollitia pariatur esse ut nesciunt quibusdam corrupti culpa a, consectetur cum inventore, quia eligendi placeat voluptas tenetur. Odit, magni.</>
    },
    {
      icon:<i class="fa-solid fa-chart-simple" id='ICON'></i>,
      title:<>MARKETING SERVICES</>,
      para:<>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, itaque. Nisi mollitia pariatur esse ut nesciunt quibusdam corrupti culpa a, consectetur cum inventore, quia eligendi placeat voluptas tenetur. Odit, magni.</>
    }
  ]
  return (
    <>
      <div className='BACK_COLOR' id='services-section'>
        <p id='SERVICES_NAME'><b>SERVICES</b><p id='LOREM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></p>
        <br></br>
        <br></br>
        <Container>
          <Row>
            {
              CARD_BODY.map((a)=>(
              <>
                <Col lg={4} md={6} sm={12}>
                  <Card id='CARD_DATA'>
                    {a.icon}
                    <Card.Body>
                      <Card.Title id='CARD_TITLE'>{a.title}</Card.Title>
                      <Card.Text>
                        {a.para}
                      </Card.Text> 
                    </Card.Body>
                  </Card>
                  <br></br>
                </Col>
              </>
              ))
            }
          </Row>       
        </Container>
        <ScrollTrigger onEnter={() => setCounterOn (true)} onExit={() => setCounterOn (false)}>
        <div className='COUNETR_SECTION'>
          <Container>
            <Row>
              {
                Count_auto.map((a)=>(
                  <>
                    <Col lg={3} md={6} sm={12}>
                      <div id='ICON1'>
                        {a.count_icon}<br></br>
                        {a.count_point}<br></br>
                      </div>
                      <p id='NAME1'>{a.name}</p>
                    </Col>
                  </>
                ))
              }
            </Row>
          </Container>
        </div>
        </ScrollTrigger>
      </div>
    </>
  )
}

export default Services



{/* <div id='ICON1'>
              <i class="fa-solid fa-check-double"></i>
            </div> 
          
          
          
          <Col lg={3} md={2} sm={12}>
                  <div id='ICON1'>
                    <i class="fa-solid fa-users"></i><br></br>
                    <br></br>
                  </div>
                  <p id='NAME1'>YEARS OF EXPERIENCE</p>
                </Col>
                <Col lg={3} md={2} sm={12}>
                  <div id='ICON1'>
                    <i class="fa-solid fa-champagne-glasses"></i><br></br>
                    {counterOn && <CountUp start={0} end={550} duration={2} delay={0}/>}
                    +<br></br>
                  </div>
                  <p id='NAME1'>TOTAL CLIENTS</p>
                </Col>
                <Col lg={3} md={2} sm={12}>
                  <div id='ICON1'>
                  <i class="fa-solid fa-flag-checkered"></i><br></br>
                    {counterOn && <CountUp start={0} end={48} duration={2} delay={0}/>}
                    +<br></br>
                  </div>
                  <p id='NAME1'>AWARD WON</p>
                </Col>
          
          
          
          
          
          
          
          
          
          
          */}
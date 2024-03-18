import React from 'react'
import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import emp1 from './testimonial-2.jpg';
import emp2 from './testimonial-4.jpg';

import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Slider_Demo() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div className='BACKIMG'>
      <Slider {...settings}>
      <div>
        <Container>
            <Row>
                <Col xs={6} md={4}><Image src={emp1} alt='' width={'100px'} height={'200px'}  roundedCircle /></Col>
            </Row>
        </Container>
      </div>
      <div>
      <Container>
            <Row>
                <Col ><Image src={emp2} alt='' width={'100px'} height={'200px'}  roundedCircle /></Col>
            </Row>
        </Container>
      </div>
      
    </Slider>
    </div>
  )
}

export default Slider_Demo

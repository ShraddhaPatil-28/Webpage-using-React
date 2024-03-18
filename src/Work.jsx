import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import slick from 'slick-slider';
import CompCarouselImage from './ExampleCarouselImage';

import Ima from 'react-bootstrap/Image';
import Overlay from './overlay-bg.jpg';
import './Work.css'
import Card from 'react-bootstrap/Card';

import Emp_Id1 from './testimonial-2.jpg';
import Emp_Id2 from './testimonial-4.jpg';

import CARD1 from './c lagn.png';
import CARD2 from './C++ programming.png';
import CARD3 from './java_programming.jpg';

import CARD4 from './html_css laguage.jpg';
import CARD5 from './javascript programming.png';
import CARD6 from './react proggraming.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Work() {
   const PortFolio_data = [
    {
        imgs : CARD1,
        title:<p>Basic "C" Programming Language</p>,
        text:<p>C is one of the most popular programming languages in use today, and is often the first language taught to students of computer science.</p>
    },
    {
        imgs : CARD2,
        title:<p>Basic "C++" Programming Language</p>,
        text:<p>developing browsers, operating systems, and applications, as well as in-game programming, software engineering, data structures, etc.</p>
    },
    {
        imgs : CARD3,
        title:<p>Java Programming Language</p>,
        text:<p>coding everything from mobile apps and enterprise software to big data applications and server-side technologies.</p>
    },
    {
        imgs : CARD4,
        title:<p>HTML and CSS Language</p>,
        text:<p>HTML and CSS are both markup languages that are used to build web pages. HTML stands for HyperText Markup Language, and CSS stands for Cascading Style Sheets.</p>
    },
    {
        imgs : CARD5,
        title:<p>JavaScript Language</p>,
        text:<p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p>
    },
    {
        imgs : CARD6,
        title:<p>React Js Language</p>,
        text:<p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) </p>
    }
   ]
   const Slider_ID = [
    {
        id:Overlay,
        empid:Emp_Id1,
        text:<>XAVI ALONSON</>,
        para:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque soluta officia similique aliquid ratione tempora magni eos. </p>
    },
    {
        id:Overlay,
        empid:Emp_Id2,
        text:<>MARTA SOCREATE</>,
        para:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque soluta officia similique aliquid ratione tempora magni eos. </p>

    }
   ]
   
  return (
    <>
    <div className='BACKGROUND_COLOR'id='work-section'>
        <p id='PORTFOLIO_NAME'><b>PORTFOLIO</b><p id='LOREM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></p>
        <br></br>
        <br></br>
        <Container>
            <Row>
            {
                PortFolio_data.map((a)=>(
                    <>
                    <Col lg={4} md={4} sm={12}>
                        <Card id='CARD_IMG'>
                            <Card.Img src={a.imgs} height={'200px'}/>
                            <Card.Body>
                                <Card.Title>{a.title}</Card.Title>
                                <Card.Text>
                                    <p>{a.text}</p>
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
    

        {
            <Carousel>
            {
                Slider_ID.map((a) => (
                    <Carousel.Item >
                        <CompCarouselImage img={a.id}/>
                        <Carousel.Caption > 
                            <Ima src={a.empid} alt='' roundedCircle />
                            <h5>{a.text}</h5>
                            <p>{a.para}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
        } 
    </div>
    </>
  )
}

export default Work


{/* 
<Container>
                                <Row>
                                    <Col xs={6} md={4} >
                                        <Image src={a.empid} alt='' roundedCircle />
                                    </Col>
                                </Row>
                            </Container>












<Container>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD1} />
                        <Card.Body>
                            <Card.Title>Lorem impsum dolor</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD2} />
                        <Card.Body>
                            <Card.Title>Loreda Cuno Nere</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD3} />
                        <Card.Body>
                            <Card.Title>Mavrito Lana Dere</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD4} />
                        <Card.Body>
                            <Card.Title>Bindo Laro Cado</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD5} />
                        <Card.Body>
                            <Card.Title>Studio Lena Mado</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD6} />
                        <Card.Body>
                            <Card.Title>Studio Big Bang</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> 
    
    <Container>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD1} />
                        <Card.Body>
                            <Card.Title>Lorem impsum dolor</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD2} />
                        <Card.Body>
                            <Card.Title>Loreda Cuno Nere</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD3} />
                        <Card.Body>
                            <Card.Title>Mavrito Lana Dere</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD4} />
                        <Card.Body>
                            <Card.Title>Bindo Laro Cado</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD5} />
                        <Card.Body>
                            <Card.Title>Studio Lena Mado</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card id='CARD_IMG'>
                        <Card.Img src={CARD6} />
                        <Card.Body>
                            <Card.Title>Studio Big Bang</Card.Title>
                            <Card.Text>
                                <p>Web Design / 18 Sep. 2018</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    */}
        {/* <div className='SLIDER'>
            <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </div>
        </div> */}
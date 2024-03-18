import React from 'react'
import'./Blogs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ima from 'react-bootstrap/Image';

import dhanu_photo from './dhanu_photo.jpeg'
import blog_img1 from './ESP_project.jpg';
import blog_img2 from './sumago_project.png';
import blog_img3 from './portfolio_dhanu.png'

function Blogs() {
    const Blogs_data =[
        {
            CARD_IMG : blog_img1,
            CARD_TITLE : <>ESP8266 NodeMCU Door Status Monitor</>,
            CARD_TEXT : <>This system uses HTTPS requests to the Telegram Bot API to control bots. It can also interact with the Telegram bot to send messages to your Telegram account. If the door's state changes, you'll receive a notification on your smartphone.</>,
            ID : dhanu_photo
        },
        {
            CARD_IMG : blog_img2,
            CARD_TITLE : <>Sumago Infotech PVT,LTD</>,
            CARD_TEXT : <>Sumago Infotech: Your Global IT Partner Sumago Infotech is your gateway to IT excellence. Our vision is to democratize Information Technology worldwide, fostering accessibility.We excel in crafting inventive IT solutions, driven by Trust, Values, and Professionalism.</>,
            ID : dhanu_photo
        },
        {
            CARD_IMG : blog_img3,
            CARD_TITLE : <>Student PortFolio using React JS</>,
            CARD_TEXT : <>Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est minus dolore quo reprehenderit impedit aliquam </>,
            ID : dhanu_photo
        }
    ]


  return (
    <>
    <div className='BACKGROUND_COLOR' id='blogs-section'>
        <p id='BLOG_NAME'><b>PROJECT</b><p id='LOREM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></p>
        <br></br>
        <br></br>
        <Container>
            <Row>
                {
                    Blogs_data.map((a)=>(
                        <>
                            <Col lg={4} md={4} sm={12}>
                                <Card id='CARD_IMG'>
                                    <Card.Img variant="top" src={a.CARD_IMG} height={'300px'} width={'200px'} />
                                    <Card.Body>
                                        <Card.Title>{a.CARD_TITLE}</Card.Title>
                                        <Card.Text>
                                            {a.CARD_TEXT}
                                        </Card.Text>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><Ima src={a.ID} alt='' width={'30px'} height={'30px'}roundedCircle /> Dhananjay Patil</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                                <br></br>
                                <br></br>   
                            </Col>
                        </>
                    ))
                }  
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Blogs



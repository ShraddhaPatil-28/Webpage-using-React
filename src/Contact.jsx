import React from 'react'
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Contact() {
  return (
    <>
    <div className='BACKGROUNG_COLOR' id='contat-section'>
        <p className='CONTACT_NAME'><b>CONTACT</b><p id='LOREM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></p>
        <br></br>
        <br></br>
        <Container>
            <Card id='CARD_DATA' className='CARD_IMG'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h4>Send Message Us</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                    {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupSubject">
                                    {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupMeassage">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    {/* <Form.Control type="text" placeholder="Subject" /> */}
                                <Form.Control as="textarea" rows={3}  placeholder='Message'/>
                            </Form.Group>
                            <Button variant="primary">Send Message</Button>
                        </Form>
                    </Col>
                    <Col>
                    <br></br>
                    
                        <h4>Send Message Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p><br></br>
                            <i class="fa-solid fa-location-dot"></i>  329 WASHINGTON ST BOSTON, MA 02108 <br></br><br></br>
                            <i class="fa-solid fa-mobile"></i>  (617) 557-0089 <br></br><br></br>
                            <i class="fa-solid fa-share"></i>   contact@example.com
                            <br></br>
                            <br></br>
                            <i class="fa-brands fa-facebook" id='LOGO'></i>
                            <i class="fa-brands fa-square-instagram" id='LOGO' ></i>
                            <i class="fa-brands fa-linkedin" id='LOGO' ></i>
                            <i class="fa-brands fa-twitter" id='LOGO' ></i>
                    </Col>
                </Row>
            </Card>
        </Container>
        <div className='END'>
            <p>@Copyright <b>DevFolio.</b> All Rights Reserved</p>
            <p>Designed by BootstrapMade</p>
            <br></br>
        </div>
    </div>
    
    </>
  )
}

export default Contact










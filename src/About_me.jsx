import React from 'react'
import './Page_Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import shraddha from'./shraddha.jpg';
function About_me() {
  const HTML = 85;
  const CSS = 75;
  const PHP = 50;
  const JAVASCRIPT = 90;

  const about_data=[
    {
      para:<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
    },
    {
      para:<p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</p>
    },
    {
      para:<p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
    },
    {
      para:<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex veniam expedita, alias consequatur quos similique, libero voluptate labore excepturi nostrum omnis nulla vero quas quo, doloremque totam debitis modi velit?</p>
    },
    {
      para:<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex veniam expedita, alias consequatur quos similique, libero voluptate labore excepturi nostrum omnis nulla vero quas quo, doloremque totam debitis modi velit?</p>
    }
  ]

  return (
    <>
    <div className='MAIN_CSS_BACKGROUND' id='about-section'>
      <div id='HEAD_SECTION'><b>ABOUT US</b><p id='LOREM'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
      <br></br>
      <br></br>
      <Container>
        <Card className='CARD_DATA'>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} sm={12}>
                  <img src={shraddha} alt='' width={'160px'} height={'160px'}/> 
                </Col>
                <Col lg={6} sm={12}>
                  <p><b>Name :</b> Patil Shraddha</p>
                  <p><b>Profile :</b> React.Js</p>
                  <p><b>Email :</b> shraddhapatil202728@gmail.com</p>
                  <p><b>Phone :</b>+91 9168175390</p>
                </Col>
              </Row>
              <Row>
                <Col lg={12} sm={12}>
                  <br></br>
                  <p id='SKILLS_NAME'><b>Skills</b></p>
                  <p>HTML</p>
                  <ProgressBar now={HTML} label={`${HTML}%`} />
                  <p>CSS</p>
                  <ProgressBar now={CSS} label={`${CSS}%`} />
                  <p>PHP</p>
                  <ProgressBar now={PHP} label={`${PHP}%`} />
                  <p> JAVASCRIPT</p>
                  <ProgressBar now={JAVASCRIPT} label={`${JAVASCRIPT}%`} />
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} id='CARD_ABOUT_ME'><b>About </b>
            <br></br>
           
            {
              about_data.map((a)=>(
                <>
                  <p id='para'>{a.para}</p>
                </>
              ))
            }
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default About_me




{/*

<p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi facere assumenda porro doloremque veritatis magni nihil omnis illo perspiciatis consectetur praesentium officiis quaerat minus eveniet, labore fugit rerum beatae?</p>
              <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi facere assumenda porro doloremque veritatis magni nihil omnis illo perspiciatis consectetur praesentium officiis quaerat minus eveniet, labore fugit rerum beatae?</p>
              <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi facere assumenda porro doloremque veritatis magni nihil omnis illo perspiciatis consectetur praesentium officiis quaerat minus eveniet, labore fugit rerum beatae?</p>
              <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi facere assumenda porro doloremque veritatis magni nihil omnis illo perspiciatis consectetur praesentium officiis quaerat minus eveniet, labore fugit rerum beatae?</p>
              <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi facere assumenda porro doloremque veritatis magni nihil omnis illo perspiciatis consectetur praesentium officiis quaerat minus eveniet, labore fugit rerum beatae?</p>







{/* <Card style={{ width: '18rem' }} id='CRAD1'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                // <Card.Body>
                //     <Card.Title>Card Title</Card.Title>
                //     <Card.Text>
                //         Some quick example text to build on the card title and make up the
                //         bulk of the card's content.
                //     </Card.Text>
                //     {/* <Button variant="primary">Go somewhere</Button> */}
                // </Card.Body>
            // </Card> */}



            // const HTML = 85;
            // const CSS = 75;
            // const PHP = 50;
            // const JAVASCRIPT = 90;
          
            // const ABOUT_Para=[
            //   {
            //     para:<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
            //   },
            //   {
            //     para:<p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</p>
            //   },
            //   {
            //     para:<p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
            //   },
            //   {
            //     para:<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, dolorem. Iste assumenda laboriosam iure quaerat doloremque fuga amet. Maiores commodi placeat esse labore nihil veniam alias sint non quas saepe.</p>
            //   }
              
            // ]



            // const progressBar=[
            //   {
            //     name:<p>HTML</p>,
            //     ProgressBar1:<ProgressBar now={HTML} label={`${HTML}%`} />
            //   },
            //   {
            //     name:<p>CSS</p>,
            //     ProgressBar1:<ProgressBar now={CSS} label={`${CSS}%`} />
            //   },
            //   {
            //     name:<p>PHP</p>,
            //     ProgressBar1:<ProgressBar now={PHP} label={`${PHP}%`} />
            //   },
            //   {
            //     name:<p>JAVASCRIPT</p>,
            //     ProgressBar1: <ProgressBar now={JAVASCRIPT} label={`${JAVASCRIPT}%`} />
            //   }
          
            // ]













      //       <div className='MAIN_CSS'>
      // <Container>
      //   <Card>
      //     <Card.Body>
      //       <Row>
      //         <Col>
      //           <Row>
      //             <Col id='photo'><img src={emp_photo} alt='emp_profile_photo'/></Col>
      //             <Col id='photo'>
      //               <div>
      //                 <b>Name : </b>Dhananjay Patil<br></br>
      //                 <b>Profile : </b>Mern Stack Developer<br></br>
      //                 <b>Email : </b>patilinfo0654@gmail.com<br></br>
      //                 <b>Contact : </b>(+91)9579581490
      //               </div>
      //             </Col>
      //           </Row>
      //           <Row>
      //             <Container>
      //               <Col id='photo'>
      //                 <h6>Skills</h6>
      //                 {
      //                   progressBar.map((a)=>(
      //                     <>
      //                       <p>{a.name}</p>
      //                       <p>{a.ProgressBar1}</p>
      //                     </>
      //                   ))
      //                 }
                      {/* <p>HTML 85%</p>
                      <ProgressBar now={HTML} label={`${HTML}%`} />
                      <p>CSS 75%</p>
                      <ProgressBar now={CSS} label={`${CSS}%`} />
                      <p>PHP 50%</p>
                      <ProgressBar now={PHP} label={`${PHP}%`} />
                      <p>JAVASCRIPT 90%</p>
                      <ProgressBar now={JAVASCRIPT} label={`${JAVASCRIPT}%`} /> */}
      //               </Col>
      //             </Container>
      //           </Row>
      //         </Col>
      //         <Col>
      //           <p id='ABOUT_NAME'><b id='photo'>About Me</b></p>
      //           <>
      //           {
      //             ABOUT_Para.map((a)=>(
      //               <>
      //                 <p id='para1' className='photo'>{a.para}</p>
      //               </>
      //             ))
      //           }
      //           </>
      //         </Col>
              
      //       </Row>
      //     </Card.Body>
      //   </Card>
      // </Container>
      // <br></br>
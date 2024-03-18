import React from 'react'

import './Navigation_bar_portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navigation_bar_portfolio() {
  return (
  <>
  <Navbar expand="lg" id='NAVBAR_START' fixed="top">
    <Container>
      <Navbar.Brand id='DEVOPS_NAME'><i class="fa-sharp fa-solid fa-code"></i>  DevOps</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link id='NAV_ITEM'>Home</Link>
          <Link id='NAV_ITEM' to='about-section'>About</Link>
          <Link id='NAV_ITEM' to='services-section'>Services</Link>
          <Link id='NAV_ITEM' to='work-section' >PortFolio</Link>
          <Link id='NAV_ITEM' to='blogs-section'>Project</Link>
          <Link id='NAV_ITEM' to='contat-section'>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div className='BACKGROUND_IMG'>
    <p id='name'> <i class="fa-brands fa-studiovinari" id='logo'></i> I Am Shraddha Patil</p>
    <p id='para_name'> I am capable of solving complex problems with my coding skills...!!!</p>
  </div>
  </>
  )
}

export default Navigation_bar_portfolio



// <Navbar id='NAVBAR_START' fixed="top">
//         <Container >
//             <Navbar.Brand id='DEVOPS_NAME'><i class="fa-sharp fa-solid fa-code"></i>  DevOps</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Link id='NAV_ITEM'>Home</Link>
//                 <Link id='NAV_ITEM' to='about-section'>About</Link>
//                 <Link id='NAV_ITEM' to='services-section'>Services</Link>
//                 <Link id='NAV_ITEM' to='work-section' >Work</Link>
//                 <Link id='NAV_ITEM' to='blogs-section'>Blog</Link>
//                 <Link id='NAV_ITEM' to='contat-section'>Contact</Link>
//               </Nav>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
  
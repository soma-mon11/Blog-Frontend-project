import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, Navigate, useNavigate } from "react-router-dom";
import img1 from '../Images/blog.png'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import UserProfile from './profie';
import HomeCarosol from './HomeCarosol';
import { NavDropdown } from 'react-bootstrap';
import vid from '../Components/Video/Logo.mp4'
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, Tooltip } from '@mui/material';
import { pink } from '@mui/material/colors';



function Navbar1() {
  const { currentUser, logout} = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <>

      {/* 
    <Navbar  className="bgbodytertiary">
      <Container className="navabarComponenet">
        <Navbar.Brand className="navabarBrand" href="/">Stay curious</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
            
            <Nav.Link href="/about" >About</Nav.Link>
            <Nav.Link href="/contact" >Contact Us</Nav.Link>
           
            </Nav>
            
             {currentUser ? ( <Button onClick={logout}>Logout</Button>) : (  <Link className='link' to="/login">Login</Link>)}
           <div style={{marginLeft:"10px"}}> <Link to="/write"><Button variant="outline-success">Write</Button></Link></div>  
           
        </Navbar.Collapse>

      </Container>

    </Navbar>
   
     */}

      <Navbar collapseOnSelect expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="/"><video src={vid} muted autoPlay loop type="video/mp4"></video></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navLink me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="">Log out</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log in
            </Nav.Link> */}

              {currentUser ? (<Button variant="primary" size="lg" onClick={logout}>Logout</Button>) : (<Nav.Link href="/login">Login</Nav.Link>)}
              <div style={{ marginLeft: "10px" }}> <Nav.Link href="/write"><Tooltip title="Write"><Avatar sx={{ bgcolor: pink[500] }}>
                <CreateIcon/>
              </Avatar></Tooltip></Nav.Link></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>


  );
}

export default Navbar1;
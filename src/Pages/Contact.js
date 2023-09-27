import { Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from '@mui/material/Alert';

function Contact() {
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        text: ""

    })
    function HandleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    function HandleClick(e) {
        e.preventDefault();
        if(!contact.name || !contact.phone || !contact.email || !contact.text){
            alert("please all the feilds")
        }
        else{
            alert("fillup successfull")
        }

    }
    return (
        <>
            <Container fluid>
                <Row> 
                    <Col className="Contactpage-container">
                        <div >
                            <h2 className="Contactpage-herotext">CONTACT US</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="conatct_div">
            <Container>
                <Row>
                    <Col lg="4" className="ContactCol">
                        <strong>Address</strong><br></br>
                        <p>112 Whiblue, Road 112, kolkata,WestBengal</p>

                    </Col>
                    <Col lg="4" className="ContactCol">
                        <strong>Email</strong><br></br>
                        <p>BlogPost@pantora.info</p>



                    </Col>
                    <Col lg="4" className="ContactCol">
                        <strong>Phone</strong><br></br>
                        <p>+82 112 99872<br></br>
                            +82 112 11234</p>

                    </Col>
                </Row>
            </Container>
            <Container className="Container_contact max-width-1 m-auto">
                <Row>
                    <Col lg='6'>
                       
                            <h1>Feel Free to Contact Us</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={contact.name}
                                        onChange={HandleChange}
                                        
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={contact.email}
                                        onChange={HandleChange}
                                        
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">

                                    <Form.Control
                                        type="phone"
                                        placeholder="Enter your phone number"
                                        name="phone"
                                        value={contact.phone}
                                        onChange={HandleChange}
                                        
                                    />
                                </Form.Group>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="comment here"
                                    className="mb-3" >
                                    <Form.Control as="textarea" placeholder="Leave a comment here" name="text" value={contact.text} onChange={HandleChange}/>
                                </FloatingLabel>
                                <Button type="submit" onClick={HandleClick}>
                                    Button
                                </Button>
                               
                            </Form>
                     
                    </Col>
                    <Col lg="6" className="contact_map">
                        <iframe width="100%" height="450"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=spezia%20spezia+(Restorante%20La%20Spezia%20)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                    </Col>
                </Row>
            </Container>
            

                    </div>
        </>
    )
}
export default Contact
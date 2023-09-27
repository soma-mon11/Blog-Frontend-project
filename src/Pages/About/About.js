import { Col, Container, Row } from "react-bootstrap"



import Table from 'react-bootstrap/table'
import AboutCarousel from "./AboutCarasol"
import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"
const style = {
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};
function About() {
    return (
        <>
            <Container >
                <Row>
                    <Col className="rb-col1 " lg={9} >
                        <Row>
                            <Col className='' lg style={{ padding: '30px' }}>
                                <div className="rb-col2 bg-secondary" >
                                    <AboutCarousel />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col lg={9} className='bg-light mb-5' style={{ padding: '25px' }}>
                        <div className='d-flex my-5' style={{ justifyContent: 'space-between' }}>
                            <div>
                                <h1>Everyone has a story to tell.</h1>

                            </div>
                        </div>
                        <div className='mb-5'>
                            <p>Stay Curious is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                                We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                        </div>

                        <div className='mb-5'>
                            <h3 className='color-blue'>Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</h3>
                            <p>Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.


                                Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.</p>
                        </div>
                        <hr></hr>
                        <div className="about_explore">
                            <Link to='/'><h1> Start Exploring</h1></Link>
                        </div>
                        <hr></hr>
                        <div className="about_explore">
                            <Link to='/write'><h1> Tell Your Story</h1></Link>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default About
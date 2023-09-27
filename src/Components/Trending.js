import { Menu } from "@mui/material"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import Blogfr from "./Carousal/Carousal"
import { Padding } from "@mui/icons-material"

function Trending(){
    return(
        <>
        <Container className="trending_container">
        <h1 style={{textAlign:"center" ,marginBottom:"10%",marginTop:"5%"}}>Trending</h1>
            <Row>
                <Col >
                <Blogfr/>
            
                </Col>
                </Row>
        </Container>
       
        </>
    )
    
}
export default Trending
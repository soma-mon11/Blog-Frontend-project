import CarousalCard from "./CarousalCard";
import img1 from '../../Images/food.jpg'
import img2 from '../../Images/monument.jpg'
import img3 from '../../Images/space2.jpg'
import img4 from '../../Images/space.jpg'
import img5 from '../../Images/monument2.jpg'
import img6 from '../../Images/music.jpg'
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

function Blogfr() {

    const settings = {

        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (<>
       
                    <div  className="gallary-box">
                        {/* <h1 style={{textAlign:"center"}}> Gallery</h1> */}
                        <Slider {...settings}>

                            <div>
                                <CarousalCard img={img1} />

                            </div>
                            <div>
                            <CarousalCard img={img2} />
                            </div>
                            <div>
                            <CarousalCard img={img3}/>
                            </div>
                            <div>
                            <CarousalCard img={img4}/>
                            </div>
                            <div>
                            <CarousalCard img={img5} />
                            </div>
                            <div>
                            <CarousalCard img={img6}/>
                            </div>
                        </Slider>
                    </div>

    </>


    );
}
export default Blogfr
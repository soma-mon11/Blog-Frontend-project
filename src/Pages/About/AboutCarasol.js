import Carousel from 'react-bootstrap/Carousel';
import Image from '../../Images/monument.jpg'

import Image2 from '../../Images/monument2.jpg'
import Image3 from '../../Images/space2.jpg'



export default function AboutCarousel() {
  return (
    <Carousel fade className='Aboutcarousel_conatiner'>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
         
          src={Image}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          src={Image2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"

          src={Image3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}


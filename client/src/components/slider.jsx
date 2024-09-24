import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe'
import bg1 from './images/vagamon.jpg'
import bg2 from './images/allepy.jpg'
import bg3 from './images/backwater.jpg'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg1} />
        <Carousel.Caption>
          <h3>Kerala</h3>
          <p>Land of the gods.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={400}>
        <Pictureframe imageUrl={bg2}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Pictureframe imageUrl={bg3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
} 

export default Slider;
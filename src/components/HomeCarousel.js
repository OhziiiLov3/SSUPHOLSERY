import {Carousel, Container} from 'react-bootstrap'

const HomeCarousel = () => {
  return (
    <div>
      <Container id="home" className="mx-auto p-2">
        <Carousel variant="dark">
          <Carousel.Item interval={5000} className="myLandingCarousel">
            <img
              className="w-100 py-4"
              style={{ height: 450 }}
              src="/images/20210813_123633.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000} className="myLandingCarousel">
            <img
              className="w-75 py-5"
              style={{ height: 450 }}
              src="/images/auto_car1.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="myLandingCarousel">
            <img
              className="w-75 py-5"
              style={{ height: 450 }}
              src="/images/auto_car2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default HomeCarousel
import React from "react";
import { Carousel, Container } from "react-bootstrap";

function BootStrapCarousel() {
  return (
    <div>
      <Container className="mx-auto p-2">
        <Carousel variant="light">
          <Carousel.Item interval={5000} className="myLandingCarousel">
            <img
              className="w-50 py-5"
              style={{ height: 450 }}
              src="/images/foam.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000} className="myLandingCarousel">
            <img
              className="w-50 py-5"
              style={{ height: 450 }}
              src="/images/Plaid.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="myLandingCarousel">
            <img
              className="w-50 py-5"
              style={{ height: 450 }}
              src="/images/blackleather.png"
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

export default BootStrapCarousel;

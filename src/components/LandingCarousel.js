import React from "react";
import { Container } from "react-bootstrap";
import BootStrapCarousel from "./BootStrapCarousel";

function LandingCarousel() {
  return (
    <Container className="landingCarousel mx-auto py-2 ">
      <h1 className="text-center py-3">Swift Stitch Upholstery</h1>
      <div className="container">
        <div className="landing-content">
          <BootStrapCarousel />
        </div>
      </div>
    </Container>
  );
}

export default LandingCarousel;



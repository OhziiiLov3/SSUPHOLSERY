import React from "react";
import { Link } from "react-scroll";



const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Email to book</p>
        <p>ssupholstrey@gmail.com</p>
        <p>SwiftStitchUpholstery</p>
        <p>Custom is Better!</p>
        <Link
          to="store"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="button"
        >
          See Store
        </Link>
      </div>
    </div>
  );
};

export default Hero;

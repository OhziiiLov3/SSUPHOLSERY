import React from 'react'
import VideoLogo from "../assets/Oldschool Volkswagen GolfMK1 __ Short clip __ MadLife Prod.mp4";
import { Container} from "react-bootstrap";

const Video = () => {
  return (
    <div>
      <h1>Video</h1>
      <Container className="d-flex align-items-center justify-content-center mx-auto p-2">
        <video src={VideoLogo} autoPlay loop muted />
        <div className="video-content">
          <h1>Swift Stitch Upholstery</h1>
        </div>
      </Container>
    </div>
  );
}

export default Video
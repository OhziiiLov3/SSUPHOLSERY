import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function Footer() {
    return (
      <footer className="footer">
        <Container className="container">
          <Row className="row">
            <Col className="text-center py-3">
              {/* Copyright &copy; JoinMyObession */}
              <div className="align-itmes-center">
                <div className="d-flex justify-content-center">
                  <FacebookShareButton
                    url={"https://facebook.com"}
                    quote={"JoinMyObession!"}
                    hashtag="#fitness"
                  >
                    <FacebookIcon className="mx-3" size={36} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"https://twitter.vom"}
                    quote={"JoinMyObession!"}
                    hashtag="#JoinMyObession"
                  >
                    <TwitterIcon className="mx-3" size={36} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={"https://zootyworld.com/zooty-water"}
                    quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                    hashtag="#BlackEntrepreneur"
                  >
                    <WhatsappIcon className="mx-3" size={36} />
                  </WhatsappShareButton>
                  <LinkedinShareButton
                    url={"https://zootyworld.com/zooty-water"}
                    quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                    hashtag="#BlackEntrepreneur"
                  >
                    <LinkedinIcon className="mx-3" size={36} />
                  </LinkedinShareButton>
                </div>
                <p className="pt-3 text-center">
                  Copyright&copy;
                  {new Date().getFullYear()}&nbsp;SwiftStitchUpholstery | All Rights
                  Reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer

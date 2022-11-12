// import React, {useState, useEffect} from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Services from '../components/Services' 
import Video from '../components/Video' 
import HomeBlog from '../components/HomeBlog' 
import HomeCarousel from '../components/HomeCarousel'
// import axios from 'axios'
// import services from '../services'
import blog from '../blog'



function HomeScreen() {
    // const [services, setServices] = useState([])

    // useEffect(() => {

    // // async function fetchServices(){

    // //     const {data}= await axios.get('/api/services/')
    // //     setServices(data)
    // //     }  
    // //     fetchServices() 

    // // }, [])

    return (
      <div>
        <h1>Welcome</h1>
        <Container className="landingCarousel mx-auto py-2 ">
          <h1 className="text-center py-2">Switft Stitch Upholstery</h1>
          <div className="container">
            <div className="landing-content">
              <HomeCarousel />
            </div>
          </div>
        </Container>
        <h1> Feature Products</h1>
        <Row className="mx-auto">
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card className="my-3 p-3 rounded">
              <Link to="/volkswagen">
                <Card.Img
                  className="homeCard img-fluid mx-auto d-block"
                  src="/images/Volkswagen_mk1.jpeg"
                  variant="top"
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  <p className="text-center">VolksWagen</p>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, ab!
                  </Card.Text>
                </Card.Title>
              </Card.Body>
              <Link className="btn btn-outline-success" to="/volkswagen">
                See All
              </Link>
            </Card>
          </Col>{" "}
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card className="my-3 p-3 rounded">
              <Link to="/supplies">
                <Card.Img
                  className="homeCard img-fluid mx-auto d-block"
                  src="/images/silverpen.jpg"
                  variant="top"
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  <p className="text-center">Supplies + Tools </p>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, ab!
                  </Card.Text>
                </Card.Title>
              </Card.Body>
              <Link className="btn btn-outline-success" to="/supplies">
                See All
              </Link>
            </Card>
          </Col>{" "}
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card className="my-3 p-3 rounded">
              <Link to="/seatcovers">
                <Card.Img
                  className="homeCard img-fluid mx-auto d-block"
                  src="/images/seatCover_1.png"
                  variant="top"
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  <p className="text-center">Seat Covers</p>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, ab!
                  </Card.Text>
                </Card.Title>
              </Card.Body>
              <Link className="btn btn-outline-success" to="/seatcovers">
                See All
              </Link>
            </Card>
          </Col>{" "}
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card className="my-3 p-3 rounded">
              <Link to="/merchandise">
                <Card.Img
                  className="homeCard img-fluid mx-auto d-block"
                  src="/images/PrimaryLightCombo.png"
                  variant="top"
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  <p className="text-center">Merchandise</p>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, ab!
                  </Card.Text>
                </Card.Title>
              </Card.Body>
              <Link className="btn btn-outline-success" to="/merchandise">
                See All
              </Link>
            </Card>
          </Col>
        </Row>
        <Services />
        <Video />
        <Row className="mx-auto">
            <HomeBlog blog={blog} />
        </Row>
      </div>
    );
}

export default HomeScreen


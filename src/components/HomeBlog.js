import React from 'react'
import {Card, Container, Col, Row} from 'react-bootstrap'
import Blog1 from "../assets/MetallicLogoPromoImage.jpg";
import blogs from '../blog'

const HomeBlog = ({blog}) => {
  return (
    <div>
      <h1>Blog</h1>
      <Container>
        <Row>
          {blogs.map((blog) => (
            <Col
              className="d-flex align-items-center justify-content-center"
              key={blog._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Card>
                <h5>{blog.name}</h5>
                <Card.Img variant="top" src={Blog1} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomeBlog
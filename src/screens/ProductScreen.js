import React from 'react'
import {Link, useParams  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'

import products from '../products'

function ProductScreen({match}) {
    const product_id = useParams();
    const product = products.find((p) => p._id === product_id.id)
    return (
      <div className="my-3 p-5">
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>Car: {product.carMake}</ListGroup.Item>
              <ListGroup.Item>
                <div className="cardText">Price: ${product.price}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <ul>
                  <li>Fit for: {product.carMake}</li>
                  <li>Fit for: {product.carModel}</li>
                  <li>Material: {product.material}</li>
                  <li>Color: {product.color}</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong> ${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
}

export default ProductScreen

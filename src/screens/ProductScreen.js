import React from 'react'
import {Link, useParams  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import services from '../services'

function ProductScreen() {
    const params = useParams();
    const service = services.find((p) => p._id == params.id)
    return (
        <div>
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link> 
            <Row>
                <Col md={6}>
                    <Image src={service.image} alt={service.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{service.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={service.rating} text={`${service.numReviews} Reviews`} color='#f8e825'/>
                    </ListGroup.Item>

                     <ListGroup.Item>
                        Price:${service.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description:{service.description}
                    </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                        <strong> ${service.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                        {service.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                 <ListGroup.Item>
                                     <Button className='btn-block' disabled={service.countInStock == 0} type='button'>Add to Cart</Button>
                                 </ListGroup.Item>
                            </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen

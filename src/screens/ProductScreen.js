import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import axios from 'axios'

function ProductScreen({match} ) {
    const ServiceId = useParams();
    const [service, setService] = useState([])

    useEffect(() => {

    async function fetchService(){

        const {data} = await axios.get(`/api/services/${ServiceId.id}`)
        setService(data)
        }  
        fetchService() 

    }, [ServiceId.id])

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
                        <h2>{service.brand}</h2>
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
                                     <Button className='btn-block' disabled={service.countInStock === 0} type='button'>Add to Cart</Button>
                                 </ListGroup.Item>
                            </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
        
    )
}

export default ProductScreen

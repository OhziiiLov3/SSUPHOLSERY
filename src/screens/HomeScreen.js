import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Services from '../components/Services'
// import products from '../products' 
import axios from 'axios'



function HomeScreen() {
    const [services, setProducts] =useState([])
    return (
        <div>
            <h1>Welcome to SSUpholstery</h1>
            <h3> Top Products</h3>
            <Row>
                {services.map(service => (
                    <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
                    <Services service={service} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen


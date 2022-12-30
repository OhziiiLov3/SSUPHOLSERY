// import React, {useState, useEffect} from 'react'
import { Row, Col, } from 'react-bootstrap'
import Product  from "../components/Product"
import Services from '../components/Services' 
import Video from '../components/Video' 
import HomeBlog from '../components/HomeBlog' 
import Hero from "../components/Hero"

// import axios from 'axios'
import products from '../products'
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
        <Hero />
        <div className='my-2 p-3'>
          <h1 className="mx-auto py-3">Feature Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Services />
          <Video />
          <Row className="my-2 p-3">
            <HomeBlog blog={blog} />
          </Row>
        </div>
      </div>
    );
}

export default HomeScreen


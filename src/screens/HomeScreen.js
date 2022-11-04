import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Services from '../components/Services' 
import axios from 'axios'



function HomeScreen() {
    const [services, setServices] = useState([])

    useEffect(() => {

    async function fetchServices(){

        const {data}= await axios.get('/api/services/')
        setServices(data)
        }  
        fetchServices() 

    }, [])

    return (
      <div>
        <h1>Welcome to SSUpholstery</h1>
        <h3> Feature Products</h3>
        <Row>
          {services.map((service) => (
            <Col
              className="d-flex align-items-center justify-content-center"
              key={service._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <Services service={service} />
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default HomeScreen


import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Services({ service }) {
    return (
       <Card className="my-3 p-3 rounded">
           <Link to={`/service/${service._id}`}>
           <Card.Img src={service.image}/>
           </Link>

           <Card.Body>

               <Link to={`/service/${service._id}`}>
           <Card.Title as="div" >
                <strong>{service.name}</strong>
           </Card.Title>
           </Link>
           
        <Card.Text as="div">
        <div className="my-3">
            {/* {product.rating} from {product.numReviews} Reviews */}
            <Rating value={service.rating} text={`${service.numReviews} Reviews` } color={'#f8e825'} />
        </div>
        </Card.Text>

        <Card.Text as ="h3">
            ${service.price}
        </Card.Text>
           </Card.Body>
       </Card>
    )
}

export default Services

import React from 'react'
import  {Card} from 'react-bootstrap'
import {Link} from "react-router-dom";

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className="productCard img-fluid mx-auto d-block"
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">
          <div className="cardText">${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product
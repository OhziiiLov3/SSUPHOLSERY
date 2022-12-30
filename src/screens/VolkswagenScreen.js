import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const VolkswagenScreen = () => {
  return (
    <div>
      <h1>Volkswagen Products</h1>
      <Row className="mx-auto">
        {products.map((product) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={product._id}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default VolkswagenScreen
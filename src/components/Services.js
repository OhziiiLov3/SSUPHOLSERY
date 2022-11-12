import React from 'react'
import {Container, Card,Button} from 'react-bootstrap'




function Services() {
    return (
      <Container className="mx-auto py-3">
        <h1>Services</h1>
        <Card className="text-center mx-auto">
          <Card.Header>Services</Card.Header>
          <Card.Body>
            <Card.Title>Custom Upholstery</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ex!
            </Card.Text>
              <Button variant="primary">Get Quote!</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Container>
    );
}

export default Services

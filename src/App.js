import logo from './logo.svg';
import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <div className="App">
        {/* Navbar */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Take A Coffee</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">News</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container className="mt-5">
          {/* the title  */}
          <h1 className="mb-4">SERVING AMAIZING COFFEE</h1>
          
          {/* Cards */}
          <Row className="mt-5">
            {/* Cards  number 1*/}
            <Col>
              <Card>
                <Card.Img variant="top" src="./coffee1.webp" style={{ height: '350px', width: '100%' }}/>
                <Card.Body>
                  <Card.Title>Cappuccino</Card.Title>
                  <Card.Text>2 $</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Cards  number 2*/}
            <Col>
              <Card>
                <Card.Img variant="top" src="./coffe3.jpg" style={{ height: '350px', width: '100%' }}/>
                <Card.Body>
                  <Card.Title>Macchiato Coffee</Card.Title>
                  <Card.Text>1.5 $</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Cards  number 3*/}
            <Col>
              <Card>
                <Card.Img variant="top" src="./coffee3.jpg" style={{ height: '350px', width: '100%' }} />
                <Card.Body>
                  <Card.Title> Latte Coffee</Card.Title>
                  <Card.Text>2 $</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>  
    
  );
}

export default App;

'use client';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4" style={{ color: 'var(--primary-dark)' }}>
          FinTech<span style={{ color: 'var(--primary-blue)' }}>Demo</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/#features" className="mx-2">Features</Nav.Link>
            <Nav.Link as={Link} href="/about" className="mx-2">About</Nav.Link>
            <Nav.Link as={Link} href="/contact" className="mx-2">Contact</Nav.Link>
            
            <Button variant="link" className="mx-2" style={{ color: 'var(--primary-blue)' }}>
              Login
            </Button>
            
            <Button className="btn-primary-custom ms-2">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

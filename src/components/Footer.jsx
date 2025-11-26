import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--neutral-white)', padding: '4rem 0 2rem' }}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">
              FinTech<span style={{ color: 'var(--accent-blue)' }}>Demo</span>
            </h5>
            <p style={{ color: 'var(--neutral-gray)', fontSize: '0.95rem' }}>
              Empowering businesses with secure and scalable financial technology solutions.
            </p>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#features" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Features</a>
              </li>
              <li className="mb-2">
                <a href="#pricing" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#security" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Security</a>
              </li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>About Us</a>
              </li>
              <li className="mb-2">
                <a href="#careers" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Careers</a>
              </li>
              <li className="mb-2">
                <a href="#contact" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#docs" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Documentation</a>
              </li>
              <li className="mb-2">
                <a href="#blog" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Blog</a>
              </li>
              <li className="mb-2">
                <a href="#support" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Support</a>
              </li>
            </ul>
          </Col>
          
          <Col md={2}>
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#privacy" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Privacy</a>
              </li>
              <li className="mb-2">
                <a href="#terms" style={{ color: 'var(--neutral-gray)', textDecoration: 'none' }}>Terms</a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '2rem 0' }} />
        
        <Row>
          <Col className="text-center">
            <p style={{ color: 'var(--neutral-gray)', fontSize: '0.9rem', margin: 0 }}>
              © {currentYear} FinTechDemo. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

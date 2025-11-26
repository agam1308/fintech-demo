import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="position-relative overflow-hidden" style={{ backgroundColor: 'var(--neutral-light)', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      {/* Geometric background shapes */}
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>
              The Future of <span style={{ color: 'var(--primary-blue)' }}>Financial</span> Technology
            </h1>
            
            <p className="lead mb-4" style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
              Secure, scalable, and intelligent financial solutions designed for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <Button className="btn-primary-custom">
                Start Free Trial
              </Button>
              <Button className="btn-outline-custom">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-5 d-flex gap-4 flex-wrap">
              <div>
                <h3 className="fw-bold mb-0" style={{ color: 'var(--primary-blue)' }}>99.9%</h3>
                <p className="text-muted mb-0">Uptime</p>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: 'var(--primary-blue)' }}>500K+</h3>
                <p className="text-muted mb-0">Transactions</p>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: 'var(--primary-blue)' }}>150+</h3>
                <p className="text-muted mb-0">Countries</p>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <Image 
              src="/hero-illustration.svg" 
              alt="Financial Technology Illustration" 
              width={600} 
              height={400}
              priority
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

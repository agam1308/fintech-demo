import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--neutral-white)' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="fw-bold mb-4" style={{ color: 'var(--neutral-white)' }}>
                Ready to Transform Your Business?
              </h2>
              <p className="lead mb-4" style={{ color: 'var(--neutral-light)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                Join thousands of companies already using FinTechDemo to streamline their financial operations.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: 'var(--neutral-white)',
                    color: 'var(--primary-blue)',
                    border: 'none',
                    padding: '0.875rem 2rem',
                    fontWeight: '600',
                    borderRadius: '8px'
                  }}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg"
                  variant="outline-light"
                  style={{
                    padding: '0.875rem 2rem',
                    fontWeight: '600',
                    borderRadius: '8px',
                    borderWidth: '2px'
                  }}
                >
                  Contact Sales
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

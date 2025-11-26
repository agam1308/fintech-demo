import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--neutral-light)', padding: '5rem 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>
                About <span style={{ color: 'var(--primary-blue)' }}>FinTechDemo</span>
              </h1>
              <p className="lead mb-4" style={{ color: 'var(--text-muted)' }}>
                We&apos;re revolutionizing the financial technology landscape with innovative solutions 
                that empower businesses to thrive in the digital economy.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Founded in 2020, FinTechDemo has grown to serve over 10,000 businesses worldwide, 
                processing billions in transactions with industry-leading security and reliability.
              </p>
            </Col>
            <Col lg={6}>
              <Image 
                src="/team-collaboration.jpg" 
                alt="Team Collaboration" 
                width={600} 
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">Our Mission & Vision</h2>
              <p className="lead" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                Building the future of finance, one innovation at a time.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6}>
              <div className="p-4 h-100" style={{ backgroundColor: 'var(--neutral-light)', borderRadius: '12px' }}>
                <h3 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>Mission</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  To democratize access to advanced financial technology, enabling businesses of all sizes 
                  to compete on a global scale with enterprise-grade tools and infrastructure.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-4 h-100" style={{ backgroundColor: 'var(--neutral-light)', borderRadius: '12px' }}>
                <h3 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>Vision</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  A world where financial transactions are seamless, secure, and accessible to everyone, 
                  powered by cutting-edge technology and unwavering commitment to innovation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: 'var(--neutral-light)', padding: '5rem 0' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">Our Core Values</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              { title: 'Security First', desc: 'Bank-grade encryption and compliance with global standards.' },
              { title: 'Innovation', desc: 'Constantly pushing boundaries with cutting-edge technology.' },
              { title: 'Transparency', desc: 'Clear pricing, honest communication, and open practices.' },
              { title: 'Customer Success', desc: 'Your growth is our success. We&apos;re here to support you 24/7.' }
            ].map((value, idx) => (
              <Col md={6} lg={3} key={idx}>
                <div className="text-center p-4">
                  <div 
                    className="mb-3 mx-auto" 
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: 'var(--primary-blue)', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {idx + 1}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--primary-dark)' }}>{value.title}</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{value.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Office Image */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Image 
                src="/office-workspace.jpg" 
                alt="Modern Office Workspace" 
                width={600} 
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
              />
            </Col>
            <Col lg={6}>
              <h2 className="fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>
                A Modern Workplace
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Our state-of-the-art offices are designed to foster creativity, collaboration, and innovation. 
                We believe that great products come from great teams working in inspiring environments.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                With locations in San Francisco, London, and Singapore, we&apos;re building a global team 
                of passionate individuals dedicated to transforming the financial industry.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--neutral-white)', padding: '4rem 0' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="fw-bold mb-4" style={{ color: 'var(--neutral-white)' }}>
                Join Us on Our Journey
              </h2>
              <p className="lead mb-4" style={{ color: 'var(--neutral-light)' }}>
                Be part of the financial revolution. Start using FinTechDemo today.
              </p>
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
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

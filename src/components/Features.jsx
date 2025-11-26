'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: '/feature-icon-1.svg',
      title: 'Bank-Grade Security',
      description: 'Enterprise-level encryption and multi-factor authentication to protect your financial data 24/7.'
    },
    {
      icon: '/feature-icon-2.svg',
      title: 'Real-Time Analytics',
      description: 'Gain instant insights with powerful dashboards and customizable reports for data-driven decisions.'
    },
    {
      icon: '/feature-icon-3.svg',
      title: 'Global Payments',
      description: 'Process transactions in 150+ countries with support for multiple currencies and payment methods.'
    }
  ];

  return (
    <section id="features" style={{ backgroundColor: 'var(--neutral-white)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Why Choose FinTechDemo</h2>
          <p className="lead" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Built for businesses that demand reliability, security, and performance at scale.
          </p>
        </div>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className="h-100 border-0 shadow-sm p-4 text-center"
                style={{ 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 82, 204, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
                }}
              >
                <div className="mb-4">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={80} 
                    height={80}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <Card.Body className="p-0">
                  <h4 className="fw-bold mb-3" style={{ color: 'var(--primary-dark)' }}>
                    {feature.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)' }}>
                    {feature.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

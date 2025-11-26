'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--neutral-light)', padding: '5rem 0 3rem' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="fw-bold mb-3" style={{ color: 'var(--primary-dark)' }}>
                Get in <span style={{ color: 'var(--primary-blue)' }}>Touch</span>
              </h1>
              <p className="lead" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '3rem 0 5rem', backgroundColor: 'var(--neutral-light)' }}>
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={7}>
              <Card className="border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                <Card.Body className="p-4 p-md-5">
                  <h3 className="fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>
                    Send us a Message
                  </h3>
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
                            Your Name *
                          </Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            style={{ padding: '0.75rem', borderRadius: '8px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
                            Email Address *
                          </Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            style={{ padding: '0.75rem', borderRadius: '8px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
                            Company Name
                          </Form.Label>
                          <Form.Control 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            style={{ padding: '0.75rem', borderRadius: '8px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label style={{ color: 'var(--text-dark)', fontWeight: '500' }}>
                            Message *
                          </Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your project or question..."
                            style={{ padding: '0.75rem', borderRadius: '8px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button 
                          type="submit"
                          className="btn-primary-custom"
                          size="lg"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info */}
            <Col lg={5}>
              <div className="mb-4">
                <Image 
                  src="/contact-support.jpg" 
                  alt="Customer Support" 
                  width={500} 
                  height={300}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                />
              </div>

              <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>
                    Contact Information
                  </h4>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
                      Email
                    </h6>
                    <p className="mb-0" style={{ color: 'var(--text-muted)' }}>
                      support@fintechdemo.com
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
                      Phone
                    </h6>
                    <p className="mb-0" style={{ color: 'var(--text-muted)' }}>
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
                      Office
                    </h6>
                    <p className="mb-0" style={{ color: 'var(--text-muted)' }}>
                      123 Financial District<br />
                      San Francisco, CA 94111<br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
                      Business Hours
                    </h6>
                    <p className="mb-0" style={{ color: 'var(--text-muted)' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="border-0" style={{ backgroundColor: 'var(--primary-blue)', borderRadius: '12px' }}>
                <Card.Body className="p-4 text-center">
                  <h5 className="fw-bold mb-2" style={{ color: 'var(--neutral-white)' }}>
                    Need Immediate Help?
                  </h5>
                  <p className="mb-3" style={{ color: 'var(--neutral-light)' }}>
                    Our support team is available 24/7
                  </p>
                  <Button 
                    variant="light"
                    size="lg"
                    style={{
                      color: 'var(--primary-blue)',
                      fontWeight: '600',
                      borderRadius: '8px'
                    }}
                  >
                    Live Chat
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

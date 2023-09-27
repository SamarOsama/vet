import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid style={{ backgroundColor: '#FFFBF3', width: '100%' }}>
            <Container className='mt-4'>
                <Row className='py-4'>
                    <Col md={4}>
                        <h4 className='footerHeader'>company</h4>
                        <div className='pt-3'>
                            <p >aboutus</p>
                            <p >Privacy Policy</p>
                            <p >Terms Condtion</p>
                            <p >contact</p>
                        </div>
                    </Col>

                    <Col md={4}>


                        <Row>
                            <Col md={8}>
                                <h4>follow us</h4>
                                <div className='bg-socialMediaContainer pt-3'>
                                    <a className='bg-socialMedia mouseClick' target="_blank"><i className='fa fa-facebook'></i> </a>
                                    <a className='bg-socialMedia' target="_blank"><i className='fa fa-linkedin'></i> </a>
                                    <a className='bg-socialMedia mouseClick' target="_blank"><i className='fa fa-instagram'></i> </a>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
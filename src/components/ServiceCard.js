import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../App'

function ServiceCard() {
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { i18n } = useTranslation();


    let servicesList = [{ "ServiceName": "Hostel" }, { "ServiceName": "Medical Car" }, { "ServiceName": "dryFood3" }]
    const addServiceToCart = (service) => {
        if (cart.hasOwnProperty(service?.ServiceName)) {
            cart[service?.ServiceName] = cart[service?.ServiceName] + 1
        } else {
            cart[service?.ServiceName] = 1
        }
        setCart({ ...cart })
        console.log("hamnboz" + JSON.stringify(cart))
    }
    return (
        <>
            <Container>

                <Row>
                    <Col xs={12}>
                        <h3 className='text-center my-2'>Our <span className='primary-color'>Service</span> </h3>
                    </Col>

                    <Col md={4}>
                        <Card

                            className="mb-2 our-service-card-border"
                        >

                            <Card.Body>
                                <Card.Title className='text-center'><span className='text-center secondry-color'><i className="fa fa-paw fa-3x"></i></span> </Card.Title>

                                <Card.Text className='text-center '>

                                    <h5>
                                        Pet Walking
                                    </h5>
                                    <h6 className='secondry-color'>
                                        Choose From A 30, 45, Or 60-Minute Visit To Give Your Pet Their Daily Dose Of Fun- Filled Exercise.
                                    </h6>
                                    <button className='btn btn-outline-warning request-service-button  '>Request Service</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={4}>
                        <Card

                            className="mb-2 our-service-card-border"
                        >

                            <Card.Body>
                                <Card.Title className='text-center'><span className='text-center secondry-color'><i className="fa fa-paw fa-3x"></i></span> </Card.Title>

                                <Card.Text className='text-center '>

                                    <h5>
                                        Pet Walking
                                    </h5>
                                    <h6 className='secondry-color'>
                                        Choose From A 30, 45, Or 60-Minute Visit To Give Your Pet Their Daily Dose Of Fun- Filled Exercise.
                                    </h6>
                                    <button className='btn btn-outline-warning request-service-button  '>Request Service</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={4}>
                        <Card

                            className="mb-2 our-service-card-border"
                        >

                            <Card.Body>
                                <Card.Title className='text-center'><span className='text-center secondry-color'><i className="fa fa-paw fa-3x"></i></span> </Card.Title>

                                <Card.Text className='text-center '>

                                    <h5>
                                        Pet Walking
                                    </h5>
                                    <h6 className='secondry-color'>
                                        Choose From A 30, 45, Or 60-Minute Visit To Give Your Pet Their Daily Dose Of Fun- Filled Exercise.
                                    </h6>
                                    <button className='btn btn-outline-warning request-service-button  ' >Request Service</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default ServiceCard
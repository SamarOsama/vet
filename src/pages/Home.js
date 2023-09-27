import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { CartContext } from '../App'
import CoverPhoto from '../components/CoverPhoto'
import Map from '../components/Map'
import Products from '../components/Products'
import ServiceCard from '../components/ServiceCard'
import home from '../imgs/home.png'
function Home() {
    const { cart, setCart } = useContext(CartContext)
    const { i18n, t } = useTranslation();

    console.log("cart:" + JSON.stringify(cart))

    Object.keys(cart)
    return (
        <>
            <Container fluid className='px-0'>
                <div className="home-page">
                    <img className="cover-image" src={home} alt="Cover" />
                    <div className="overlay">
                        <Row>
                            <Col lg={6} md={8}>
                                <div className='d-flex flex-column justify-content-center '>
                                    <h2>{t('taking Care For Your Smart Dog !')}</h2>
                                    <h5>{t('human-Canine Bonding Is The Relationship Between Dogs And Humans.')}</h5>
                                </div>
                            </Col>
                        </Row>



                    </div>
                </div>
            </Container>


            <ServiceCard />


            {/* <CoverPhoto /> */}
            <Products />
            {/* <Map /> */}

        </>

    )
}

export default Home
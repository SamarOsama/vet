import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import cover from '../imgs/cover.png'

function CoverPhoto() {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="cover-photo">
                <img className="cover-image" src={cover} alt="Cover" />
                <div className="overlay">
                    <Row>
                        <Col lg={6} md={8}>
                            <div className='d-flex flex-column justify-content-center '>
                                <h2>{t('Taking Care For Your Smart Dog !')}</h2>


                                <h5>{t('Human-Canine Bonding Is The Relationship Between Dogs And Humans.')}</h5>

                            </div>
                        </Col>
                    </Row>



                </div>
            </div>
        </Container>

    )
}

export default CoverPhoto
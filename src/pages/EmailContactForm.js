
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';


function EmailContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e)
        emailjs.sendForm('service_k4cxspv', 'template_pddoo9w', form.current, 'HmxMgExWnIVgp8Ped')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <Container>
            <Row>
                <Col md={6} className='m-auto' >
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group"> <label className='form-label'>Pets Name</label>
                            <input className='form-control' type="text" name="Pet_name" /></div>

                        <div className="form-group">
                            <label className='form-label'>Your Name</label>
                            <input className='form-control' type="text" name="user_name" />
                        </div>
                        <input className='form-control ' value={localStorage.getItem("userEmail")} name="user_email" />

                        <input type="submit" value="Send" />
                    </form>
                </Col>
            </Row>

        </Container>

    );
};
export default EmailContactForm

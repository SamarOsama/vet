import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import photo from '../imgs/Group 61493.png'


export default function Register() {
    const { register, handleSubmit } = useForm();
    const [id, setId] = useState('')
    const navigate = useNavigate()
    const Login = () => {
        navigate({
            pathname: '/login'
        })
    }

    const onSubmit = data => {
        console.log(JSON.stringify(data))
        let registerObj = { id, "userEmail": data.userEmail, "password": data.password, }
        fetch("http://localhost:3000/user/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registerObj)
            }).then((res) => {
                console.log(res.status)
                if (res.status != 500) {
                    Login()
                }
                else {

                    alert("error")
                }
            })




    };

    return (
        <Container fluid className="px-0">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}>
                    <img src={photo} alt="reg-img" className="img-fluid" />
                </Col>
                <Col md={6} >
                    <Row className="justify-content-center"
                    >
                        <Col md={6}>
                            <h3 className="primary-color text-center">Welcome!</h3>
                            <Form className="login" onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group controlId="formBasicRegisterEmailTwo">
                                    <Form.Label className="d-flex">Email </Form.Label>
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>

                                    <Form.Control
                                        name="userEmail"
                                        type="email"
                                        placeholder='your email @gmail.com'
                                        className="form-border"
                                        onChange={(e) => setId(e.target.value)}
                                        {...register("userEmail")}
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label className="d-flex"> password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        className="form-border"
                                        {...register("password")}
                                    />
                                </Form.Group>


                                <Col md={4} className="m-auto">
                                    <button
                                        className="btn btn-outline-warning w-100 my-3"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

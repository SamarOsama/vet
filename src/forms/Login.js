import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import photo from '../imgs/Group 61493.png'



export default function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState()
    const [users, setUsersList] = useState()

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    };
    useEffect(() => {
        getUsersOnStartUp().then((v) => { console.log(v) })

    }, [])



    const navigate = useNavigate()
    const Home = () => {
        navigate({
            pathname: '/home'
        })
    }



    const getUsersOnStartUp = async () => {
        const user = await axios.get("http://localhost:3000/user",
            { "Content-Type": "application/json" },
        )
        setUsersList(user.data)
        return user.data

    }
    const checkEmail = (users) => {
        const user = users.find(user => user.userEmail === userEmail); // extract the email from the formData
        if (user) return user;
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = await axios
            .get("http://localhost:3000/user")
            .then((res) => checkEmail(res.data, userEmail)).then((resp) => {
                if (resp) {
                    console.log(resp.id)
                    localStorage.setItem("userId", resp.id)
                    localStorage.setItem("userEmail", resp.userEmail)

                    Home()
                }


                else
                    alert("Enter Write credential")

            });




    };





    return (
        <Container fluid className="px-0">
            <Row>
                <Col md={6}>
                    <img src={photo} alt="reg-img" className="img-fluid" />
                </Col>
                <Col md={6} className="m-auto">
                    <Row>
                        <Col md={8} className='m-auto'>
                            <h3 className="primary-color text-center">Welcome!</h3>

                            <form className="login " onSubmit={(e) => { handleSubmit(e) }} >
                                <Row>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label className="d-flex">Email </Form.Label>
                                            <Form.Control
                                                name="userEmail"
                                                type="email"
                                                placeholder='your email @gmail.com'
                                                className="form-border"
                                                value={userEmail}
                                                onChange={handleEmailChange}

                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label className="d-flex"> password</Form.Label>
                                            <Form.Control
                                                name="userPassword"
                                                type="password"
                                                placeholder="password"
                                                value={userPassword}
                                                className="form-border"
                                                onChange={handlePasswordChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col md={4} className="m-auto">
                                    <Button
                                        variant="secondary"
                                        className="text-light w-100"
                                        type="submit"
                                    >

                                        submit
                                    </Button>
                                </Col>
                            </form>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container >
    );
}

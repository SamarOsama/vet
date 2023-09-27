import React, { useContext, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import photos from '../imgs/1.png'
import photos1 from '../imgs/Group 7.png'
import photos3 from '../imgs/Group 11.png'

import photos2 from '../imgs/Group 9.png'
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom'


function Products() {
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
        puttt()
    }, [cart])


    let productsList = [{ img: photos, "ProductName": "dryFood" }, { "img": photos1, "ProductName": "dryFood2" }, { "img": photos2, "ProductName": "dryFood3" }, { "img": photos3, "ProductName": "dryFood4" }]
    const addProductToCart = (product) => {
        if (cart.hasOwnProperty(product?.ProductName)) {
            cart[product?.ProductName] = cart[product?.ProductName] + 1
        } else {
            cart[product?.ProductName] = 1
        }
        setCart({ ...cart })
        console.log("hamnboz" + [{ "productName": "sss" }])




    }
    const puttt = () => {
        fetch("http://localhost:3000/user/" + localStorage.getItem("userId"),
            {

                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cartList: { ...cart } })

            }).then((res) => {

                console.log(res.status)
                if (res.status != 500) {
                    console.log("s")
                }
                else {

                    alert("error")
                }
            })
    }

    const onCheckout = () => {

        navigate({
            pathname: '/checkout'
        })
    }
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h3 className='text-center my-2'>Our <span className='primary-color'>Products</span> </h3>
                </Col>



                <Row>
                    {productsList.map((product) => {
                        return (


                            <Col lg={3} md={4} xs={10} className='card-auto-small'>
                                <div>
                                    <img src={product?.img}
                                        className='img-fluid mt-4 ' />
                                    <div className='bg-light-pink flex-column '>
                                        <h6 className='text-dark font-weight-bolder' >Reflex Plus Adult Cat Food Salmon</h6>
                                        <div className='d-flex justify-content-between   '  >
                                            <p className='text-muted ' >Product: {product?.ProductName}</p>
                                            <p className='text-muted ' >size: 250gm</p>
                                        </div>
                                        <div >
                                            <h6 className=' ' >250 LE</h6>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button className='btn  request-service-button w-75   ' onClick={() => addProductToCart(product)}>Add to cart</button>

                                        </div>
                                    </div>


                                </div>
                                <Row>
                                    <Col onClick={onCheckout}>sss</Col>

                                </Row>
                            </Col>



                        )
                    })}
                </Row>

            </Row>
        </Container >
    )
}

export default Products
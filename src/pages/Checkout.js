import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import { CartContext } from '../App'


export default function Checkout() {

    const { cart, setCart } = useContext(CartContext)
    console.log(cart)


    const onRemoveItem = (itemName) => {
        if (cart[itemName] === 1) {
            delete cart[itemName]
            setCart({ ...cart })
        }
        else if (cart[itemName]) {
            setCart({ ...cart, [itemName]: cart[itemName] - 1 })
        }

    }

    return (
        <div>
            {Object.keys(cart).map((itemName) => {
                return (
                    <>
                        <Col lg={3} md={4} xs={10} className='card-auto-small'>
                            <div>
                                <img src={itemName?.img}
                                    className='img-fluid mt-4 ' />
                                <div className='bg-light-pink flex-column '>
                                    <h6 className='text-dark font-weight-bolder' >Reflex Plus Adult Cat Food Salmon</h6>
                                    <div className='d-flex justify-content-between   '  >
                                        <p className='text-muted ' >Product: {itemName}</p>
                                        <p className='text-muted ' >{cart[itemName]}</p>
                                    </div>
                                    <div >
                                        <h6 className=' ' >250 LE</h6>
                                    </div>

                                </div>


                            </div>

                        </Col>

                        <div className='btn btn-primary'>Checkout</div></>

                )
            })}
        </div>
    )
}

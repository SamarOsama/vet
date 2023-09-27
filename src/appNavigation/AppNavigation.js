import React from 'react'
import Home from '../pages/Home'
import Paths from './Routes'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from '../outline/Header';
import Services from '../pages/Services';
import Login from '../forms/Login';
import Register from '../forms/Register';
import Checkout from '../pages/Checkout';
import EmailContactForm from '../pages/EmailContactForm';



export default function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path={Paths.Home} element={<Home />} />
                    <Route exact path={'/'} element={<Home />} />
                    <Route exact path={Paths.Service} element={<Services />} />
                    <Route exact path={Paths.Login} element={<Login />} />
                    <Route exact path={Paths.Register} element={<Register />} />
                    <Route exact path={Paths.Checkout} element={<Checkout />} />
                    <Route exact path={Paths.Profile} element={<EmailContactForm />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

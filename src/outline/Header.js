import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OutlineStyle.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Header() {
  const [loading, setloading] = useState(false)
  const [language, setLanguage] = useState((localStorage.getItem("Lang-pref")) ??
    "EN")

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {

    i18n.changeLanguage(lng);
    setloading(true)
    setLanguage(lng)
    localStorage.setItem("Lang-pref", lng)
    setloading(false)


  };
  useEffect(() => {
    localStorage.setItem("Lang-pref", language)
    document.documentElement.setAttribute('lang', language)
    if (language === "EN") {
      setloading(true)
      document.documentElement.setAttribute('dir', "ltr")
      setloading(false)
    }
    else if (language === "العربية") {
      setloading(true)
      document.documentElement.setAttribute('dir', "rtl")
      setloading(false)
    }



  }, [language])

  return (
    <>
      <Navbar className="header-bg ">
        <Container>
          <Navbar.Brand >
            <img
              src={logo}
              className="img-fluid mouseClick"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" >
              <Nav.Link className=" ps-xl-3 ps-lg-2 ">{t('home')}</Nav.Link>

              <Nav.Link className=" ps-xl-3 ps-lg-2 ">Our Services</Nav.Link>

              <Nav.Link className=" ps-xl-3 ps-lg-2 ">{t('about us')}</Nav.Link>

              <Nav.Link className=" ps-xl-3 ps-lg-2 ">Pet profile</Nav.Link>
            </Nav>
            <Dropdown>
              <div className='d-flex'>
                <Nav.Link className=" ps-xl-3 ps-lg-2 " ><i className='fa fa-shopping-cart fa-2x px-4'></i></Nav.Link>


                {language == 'EN' ?
                  <Button variant="transparent" className='mx-1 my-1 text-light ' style={{ border: '1px solid white' }} id="dropdown-basic" onClick={() => changeLanguage('العربية')}>
                    <span xs={2} className="my-2" >العربية</span>
                  </Button>
                  :
                  <Button variant="transparent" className='mx-1 my-1 text-light ' style={{ border: '1px solid white' }} id="dropdown-basic" onClick={() => changeLanguage('EN')}>
                    <span xs={2} className="my-2" > EN</span>

                  </Button>

                }
              </div>











            </Dropdown>

            {/* <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic" className='px-xl-5 mx-1 px-lg-4 px-md-5'>

              </Dropdown.Toggle>

              <Dropdown.Menu style={{ textAlign: 'center' }}>
                <Dropdown.Item href="/profile" >sssssssss</Dropdown.Item>
                <Dropdown.Item >sssssss</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <Button className='btn btn-warning text-light mx-1 px-xl-5 px-lg-4 px-md-5' >ssss</Button>
 */}

          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )
}

export default Header
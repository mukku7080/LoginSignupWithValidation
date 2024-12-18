import React from 'react'
import {Col, Container, Nav, Navbar, NavDropdown, NavLink, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBs = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Navbar className='bg-warning' expand='md'>
                    <Container>
                        <Navbar.Brand>
                            <img src="logo192.png" alt="" height={30} width={30} />&nbsp;
                            My website
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='my-nav'></Navbar.Toggle>
                        <Navbar.Collapse id='my-nav'>
                        <Nav className='me-auto fw-bold'>
                            <NavLink>Home</NavLink>
                            <NavLink>About</NavLink>
                            <NavDropdown title='services'>
                                <NavDropdown.Item>Servic1</NavDropdown.Item>
                                <NavDropdown.Item>Servic2</NavDropdown.Item>
                                <NavDropdown.Item>Servic3</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink>Contact</NavLink>
                        </Nav>
                        <Navbar.Text>Sign In here <a href='#'>Login</a></Navbar.Text>
                        </Navbar.Collapse>

                      
                    </Container>
                </Navbar>
            </Col>
        </Row>
    </Container>
  )
}

export default NavBs
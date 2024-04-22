import React from 'react'
import {Navbar,Container} from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
         <Link to={'/'} className='fw-bolder' style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-dark'>
            <i className="fa-solid fa-music me-2"></i>
             Media Player
            </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
       
  )
}
import { Form, Link } from 'react-router-dom'

export default Header

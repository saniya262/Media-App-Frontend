import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="" className='text-light fw-bolder fs-4'>
          <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
          <i className="fa-solid fa-play fa-beat me-2" ></i> Media-Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

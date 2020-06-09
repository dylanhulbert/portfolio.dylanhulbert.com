import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (

    <div>
      
      <Navbar expand="lg" variant="primary" bg="dark">
        <Link class="nav-link" to="/"><div class="text-light">Dylan Hulbert</div></Link>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio"><div class="text-light">Portfolio</div></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact"><div class="text-light">Contact</div></Link>
            </li>
          </ul>
      </Navbar>
    
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (

    <div>

      <Navbar expand="lg"  bg="dark">
        <Link class="nav-link" to="/"><div class="text-light"><h4>Dylan Hulbert</h4></div></Link>
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
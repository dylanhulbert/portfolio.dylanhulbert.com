import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (

    <div>
      <h1>navbar</h1>
        <Link to="/">dylan hulbert</Link> | 
        <Link to="/portfolio"> portfolio</Link> | 
        <Link to="/contact"> contact</Link>
    </div>

  )
}
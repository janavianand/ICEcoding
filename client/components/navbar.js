import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>STATUS UPDATE OR VIEW</h1>
    <nav>
      <div>
        {/* The navbar will show these links before you log in */}
        <Link to="/">Home</Link>
        <Link to="/update">Update</Link>
        <Link to="/view">View</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-items'>
            <li className='nav-links'> <Link to="/" className='link'>HOME</Link> </li>
            <li className='nav-links'> <Link to="/course" className='link'>COURSE</Link> </li>
            <li className='nav-links'> <Link to="/Registration" className='link'>REGISTRATION</Link> </li>
            <li className='nav-links'> <Link to="/trainer" className='link'>TRAINER</Link> </li>
            <li className='nav-links'> <Link to="/videos" className='link'>VIDEOS</Link> </li>
            <li className='nav-links'> <Link to="/display" className='link'>DETAILS</Link> </li>
        
        </ul>
    </div>
  )
}

export default Navbar
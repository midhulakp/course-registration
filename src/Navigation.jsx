import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'


const Navigation = () => {
  return (
    <div>
        <div id="nav">
            <Logo></Logo>
            <NavItems></NavItems>
            <Login></Login>

        </div>
    </div>
  )
}

export default Navigation
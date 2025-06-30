import React from 'react'
import KrushiMartLogo from '../../assets/KrushiMartLogo.png'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'



export default function Header() {

  const location = useLocation();
  const pathName = location.pathname;

  //ganesh

  return (
    <header >
      <div className='HeaderMainBox'>
        <div>
          <img className='KrushiLogoImg' src={KrushiMartLogo} alt="Company Logo" />
          <b className='moving-text'>Krushi Mart</b>
        </div>
        <div className='headerSecondBOx'>

          <Link to="/login">Log in</Link>
          {!pathName.includes("/singup") && (<Link to="/singup">Sign Up</Link>)}
        </div>
      </div>
    </header>
  )
}

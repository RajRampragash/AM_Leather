import React from 'react'
import {Link} from "react-scroll"
import './header.css'

const Header = () => {
  return (
    <div className='header'>
            <div className='header__left'>
                <h1>AM<span>Leather</span></h1>
            </div>
            <div className='header__right'>
                <Link to="about" smooth={true} duration={500}>
                    <h4> About</h4>
                </Link>
               
                <Link to="Products" smooth={true} duration={500}>
                    <h4> Products</h4>
                </Link>
                {/* <Link to="Reviews" smooth={true} duration={500}>
                    <h4> Reviews</h4>
                </Link> */}
                <Link to="contact" smooth={true} duration={500}>
                    <h4> Contact</h4>
                </Link>
                <h4 className='header__rigthButton'> Join with me</h4>
            </div>

        </div>
  )
}

export default Header
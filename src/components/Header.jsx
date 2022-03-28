import React from 'react'
import logo from '../img/pizza.jpeg'
import { HiShoppingCart } from "react-icons/hi";

export default function Header({cartItems}) {
    return (
        <div className='header'>
            <div className='headerLogo'>
                <img className='logo' src={logo} alt="logo" />
                <p className='name'><span>P</span>erfect <span>P</span>izza</p>
            </div>
            <div>
                <p className='badge'>{cartItems.length}</p>
                <HiShoppingCart className='icon' />
            </div>
        </div>
    )
}

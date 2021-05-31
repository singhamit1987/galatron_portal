import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../menu/menu'
import { HEADER_JSON } from '../../constant/translate'

export default function Header() {
    const [handleMenu, setHandleMenu] = useState(false)
    const closeMenu = () => {
        setHandleMenu(false)
    }
    return (
        <>
            <div class="container">
                <div class="logo_block">
                    <div class="logo"><NavLink to="/"><img src={window.location.origin + '/images/logo.png'} alt="Galatron Logo" /></NavLink></div>
                    <div class="navigation"><button onClick={()=>setHandleMenu(true)}>{HEADER_JSON.menu}</button></div>
                    <div class="top_btn"><NavLink to="/cart">{HEADER_JSON.cart}</NavLink></div>
                    <div class="top_btn"><NavLink to="/login">{HEADER_JSON.login}</NavLink></div>
                    <div class="shopping_bag"><NavLink to="/cart"><img src={window.location.origin + '/images/shopping-bag.png'} alt="Shopping Bag" /></NavLink></div>
                    <div class="account_mobile"><NavLink to="/login"><img src={window.location.origin + '/images/user.png'} alt="User Account" /></NavLink></div>
                  
                </div>
            </div>
            <Menu status={handleMenu} close={closeMenu} />
        </>
    )
}
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../menu/menu'
import { getToken } from '../../helpers/account'
import { HEADER_JSON } from '../../constant/translate'

export default function White_header() {
    const [handleMenu, setHandleMenu] = useState(false)
    const closeMenu = () => {
        setHandleMenu(false)
    }
    return (
        <>
            <div class="container_fluid white_header">
                <div class="container">
                    <div class="logo_block">
                        <div class="logo"><NavLink to="/"><img src={window.location.origin + '/images/logo-dark.png'} alt="Galatron Logo" /></NavLink></div>
                        <div class="navigation"><button onClick={()=>setHandleMenu(true)}>{HEADER_JSON.menu}</button></div>
                        <div class="top_btn"><NavLink to="/cart">{HEADER_JSON.cart}</NavLink></div>
                        {getToken == null? <div class="top_btn"><NavLink to="/login">{HEADER_JSON.login}</NavLink></div> : <div class="top_btn"><NavLink to="/account">{HEADER_JSON.account}</NavLink></div> }     
                        <div class="shopping_bag"><NavLink to="/cart"><img src={window.location.origin + '/images/shopping-bag_blue.png'} alt="Shopping Bag" /></NavLink></div>
                        {getToken == null? <div class="account_mobile"><NavLink to="/login"><img src={window.location.origin + '/images/user_blue.png'} alt="User Account" /></NavLink></div> : <div class="shopping_bag"><NavLink to="/account"><img src={window.location.origin + '/images/user_blue.png'} alt="User Account" /></NavLink></div> }  
                                    
                    </div>
                </div>
            </div>
            <Menu status={handleMenu} close={closeMenu} />
        </>
    )
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MENU_JSON } from '../../constant/translate'



export default function Menu(props) {
    const changeLanguage = (lang) => {
        localStorage.setItem('lang',lang)
        window.location.reload(false)
    }




    return (
        <>
            <div className={props.status == true? 'dropdown-content show' : 'dropdown-content' } >
                <div class="container">
                    <div class="container">
                        <div class="logo_block">
                            <div class="logo"><NavLink to="/"><img src={window.location.origin + "/images/logo.png"} alt="Galatron Logo" /></NavLink></div>
                            <div class="navigation"><button onClick={()=>props.close()}>{MENU_JSON.close}</button></div>

                        </div>
                    </div>
                    <div class="menu">
                        <div class="menu_bar">
                            <ul>
                                <li><NavLink to="/company">{MENU_JSON.our_company}</NavLink></li>
                                <li><NavLink to="/category/all">{MENU_JSON.products}</NavLink></li>
                                <li><NavLink to="/download">{MENU_JSON.download}</NavLink></li>
                                <li><NavLink to="/contact">{MENU_JSON.contact}</NavLink></li>
                            </ul>
                        </div>
                        <div class="menu_img">
                            <img src={window.location.origin + "/images/index.jpg"} alt="menu image" />
                        </div>
                    </div>






                    <div class="menu">
                        <div class="language">
                            <ul>
                                <li><button onClick={()=>changeLanguage('it')}>ITA</button></li>
                                <li><button onClick={()=>changeLanguage('en')}>EN</button></li>
                                <li><button onClick={()=>changeLanguage('es')}>ES</button></li>
                                <li><button onClick={()=>changeLanguage('ch')}>中文</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
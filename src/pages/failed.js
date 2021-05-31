import React, { Component } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { ORDERCONFIRM_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';
function Confirm() {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="order_confirmation">
                    <h2>{ORDERCONFIRM_JSON.order_failure}</h2>
                    <p>{ORDERCONFIRM_JSON.of_txt_1}
                    <span>{ORDERCONFIRM_JSON.of_txt_2}</span>
                    {ORDERCONFIRM_JSON.of_txt_3}</p>
                <div class="button_homepage">
                <NavLink to="/">{ORDERCONFIRM_JSON.back_home}</NavLink>
                </div>
                </div>
          </div>
            <Footer />
        </div>
    );
}

export default Confirm;

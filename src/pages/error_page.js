import React, { Component } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { ORDERDETAILS_JSON } from '../constant/translate'

export default function Pagenofound() {
    return (
        <>
        <Header />
            <div class="not_found">
            <h1>{ORDERDETAILS_JSON.page_notfound}</h1>
            </div>
        
        </>
    )
}
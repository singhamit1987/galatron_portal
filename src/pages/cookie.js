import React, { useReducer, useEffect, useState } from 'react'
import White_header from '../components/header/white-header'
import White_footer from '../components/footer/white-footer'
import { CONTENT_JSON } from '../constant/translate'

function Cookie() {
    return (
        <div>
            <White_header />
            <div class="container_fluid content_page">
                <div class="view_cart">
                <h1>{CONTENT_JSON.cookie_title}</h1>
                    <p>{CONTENT_JSON.cookie_content}</p>
                </div>
            </div>
            <White_footer />
        </div>
    );
}

export default Cookie;

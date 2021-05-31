import React from 'react'
import { NavLink } from 'react-router-dom';
import { LEFTMENU_JSON } from '../../constant/translate'
import { useHistory } from 'react-router-dom';



export default function Left() {
    const history = useHistory();
    const Logout = () => {
        localStorage.clear()
        window.location.reload(false)
    }

    return (
        <>
            <div class="account_details_menu">
                <ul>
                    <li><NavLink to="/account">{LEFTMENU_JSON.account_details}</NavLink></li>
                    {/* <li><NavLink to="/address">{LEFTMENU_JSON.my_address}</NavLink></li> */}
                    <li><NavLink to="/order-history">{LEFTMENU_JSON.my_orders}</NavLink></li>
                    <li><a onClick={() => Logout()}>{LEFTMENU_JSON.logout}</a></li>
                </ul>
            </div>
        </>
    )
}
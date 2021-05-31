import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import Left from '../components/menu/left-menu'
import { ORDERHISTORY_JSON, ORDERDETAILS_JSON, LEFTMENU_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';
import { getOrderList, getOrderProducts } from '../services/api/order.service'
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react';
import { getCustomerId } from '../helpers/account'
import { getProductById } from '../services/api/product.service'
import { getOrderDatawithImage } from '../helpers/account'
import { getProductData } from '../services/api/product.service'


export default function Order() {

    const [orderList, setOrderList] = useState([])
    
    const OrderProductbyId = (id) => {
        return getOrderProducts(id)
        .then(res => res.data.data)
    }

    useEffect(() => {
        //  console.log(getCustomerId())
        getOrderList(getCustomerId())
            .then(res => setOrderList(res.data.data))
    }, [])


    return (
        <>
            <Header />
            <div class="container_fluid">
                <div class="account_details">
                    <h1>{ORDERDETAILS_JSON.account}</h1>
                    <Left />

                    {orderList.length == 0 ? 'No Order Found' : null}
                    {orderList.map(function (list) {
                       // console.log(list)
                        return (
                            <div class="my_orders">
                                <div class="order_status">
                                    <ul>
                                        <li>
                                            <h4>{ORDERDETAILS_JSON.delivered}</h4>
                                            <h5>{list.delivered || list.status}</h5>
                                        </li>
                                        <li>
                                            <h4>{ORDERDETAILS_JSON.order_no}</h4>
                                            <h5>{list.order_id}</h5>
                                        </li>
                                        <li>
                                            <h4>{ORDERDETAILS_JSON.order_date}</h4>
                                            <h5>{list.date}</h5>
                                        </li>
                                    </ul>
                                </div>

                                <div class="order_overview">
                                    <div class="ordered_products">
                             
                                        {[] || OrderProductbyId(list.id).map(function (listing) {
                                            return ( <img src={listing.img1} alt={listing.pname} /> )
                                        })}
                                    </div>

                                    <div class="viewcart_butttons">

                                        <div class="proceedtocheckout"><NavLink to={'order-details/' + list.order_id}>{ORDERHISTORY_JSON.view_order}</NavLink></div>
                                   
                                    </div>

                                </div>



                            </div>
                        )
                    })}





                </div>
            </div>


            <Footer />

        </>
    )
}
import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import Left from '../components/menu/left-menu'
import { ORDERDETAILS_JSON, LEFTMENU_JSON } from '../constant/translate'
import { NavLink, useParams } from 'react-router-dom';
import { getOrderDetails, getOrderProducts } from '../services/api/order.service'
import { useEffect, useState } from 'react';
import { CURRENCY } from '../constant/currency'
import { getProductById } from '../services/api/product.service'
import { getOrderDatawithImage } from '../helpers/account'
import { getProductData } from '../services/api/product.service'

export default function Orderdetails(props) {

    const [orderDetail, setOrderDetail] = useState([])
    const [orderProducts, setOrderProducts] = useState([])
    const [product, setProduct] = useState([])
    const { order_no } = useParams()

  

    useEffect(() => {
        getOrderDetails(order_no)
            .then(res => setOrderDetail(res.data.data))
        getOrderProducts(order_no)
            .then(res => setOrderProducts(res.data.data))
        getProductData()
            .then(res => setProduct(res.data.data))

    }, [])

 

    return (
        <>
            <Header />
         
            {orderDetail.map(function (singleOrder) {
                
                return (
                    <>
                        <div class="container_fluid">
                            <div class="account_details">
                                <h1>{ORDERDETAILS_JSON.account}</h1>
                                <Left />
                                <div class="my_orders">

                                    <div class="order_status">
                                        <ul>
                                            <li>
                                                <h4>{ORDERDETAILS_JSON.delivered}</h4>
                                                <h5>{singleOrder.delivered}</h5>
                                            </li>
                                            <li>
                                                <h4>{ORDERDETAILS_JSON.order_no}</h4>
                                                <h5>{singleOrder.order_id}</h5>
                                            </li>
                                            <li>
                                                <h4>{ORDERDETAILS_JSON.order_date}</h4>
                                                <h5>{singleOrder.date}</h5>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <h4>{ORDERDETAILS_JSON.ship_address}</h4>
                                                <h5>
                                                    {singleOrder.sh_name}
                                                    <span>{singleOrder.sh_building_name}</span>
                                                    <span>{singleOrder.building_name} {singleOrder.sh_city} {singleOrder.sh_postal_code}</span>
                                                    <span>{singleOrder.sh_country}</span>
                                                    <span>{singleOrder.sh_phone}</span>
                                                </h5>
                                            </li>
                                            <li>
                                                <h4>{ORDERDETAILS_JSON.bill_address}</h4>
                                                <h5>
                                                    {singleOrder.c_name}
                                                    <span>{singleOrder.sh_building_name}</span>
                                                    <span>{singleOrder.building_name} {singleOrder.sh_city} {singleOrder.sh_postal_code}</span>
                                                    <span>{singleOrder.sh_country}</span>
                                                    <span>{singleOrder.sh_phone}</span>
                                                </h5>
                                            </li>
                                            <li>
                                                <h4>{ORDERDETAILS_JSON.ship_method}</h4>
                                                <h5>{ORDERDETAILS_JSON.standard} </h5>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="order_details">
                                        <h2>{orderProducts.length} {ORDERDETAILS_JSON.products}</h2>
                                        
                                        <div class="order_items">
                                            <ul>
                                                {orderProducts.map(function(listing) {
                                                    return (
                                                        <li>
                                                            
                                                            <img src={listing.img1} alt={listing.pname} />
                                                            <h3>{listing.pname}</h3>
                                                            <h4>{CURRENCY} {listing.price}</h4>
                                                            <h5>{ORDERDETAILS_JSON.quantity} x {listing.qty}</h5>
                                                        </li>
                                                    )
                                                })}

                                            </ul>

                                        </div>


                                        <div class="order_price">
                                            <div class="order_amount">
                                                <h2>{ORDERDETAILS_JSON.total_order}</h2>
                                                <ul>
                                                    <li>
                                                        <h5>{ORDERDETAILS_JSON.subtotal}</h5>
                                                        <h6>{CURRENCY} {singleOrder.total_price}</h6>
                                                    </li>
                                                    {/* <li>
                                                        <h5>{ORDERDETAILS_JSON.shipping}</h5>
                                                        <h6>€7.50</h6>
                                                    </li> */}
                                                    <li>
                                                        <h5>{ORDERDETAILS_JSON.total}</h5>
                                                        <h6>{CURRENCY} {singleOrder.total_price}</h6>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="payment_details">
                                                <h2>{ORDERDETAILS_JSON.payment_details}</h2>
                                                <h5>{singleOrder.payment_method}</h5>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div class="bckto_orderhistory">
                                    <div class="viewcart_butttons">
                                        <div class="proceedtocheckout"><NavLink to="/order-history">{ORDERDETAILS_JSON.back2orderhistory}</NavLink></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )
            })}



            <Footer />

        </>
    )
}
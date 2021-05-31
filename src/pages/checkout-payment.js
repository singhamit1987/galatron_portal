import React, { useEffect, useState } from 'react'
import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import { CHECKOUT_JSON } from '../constant/translate'
import { NavLink, Redirect } from 'react-router-dom';
import CheckoutForm from '../components/payment/stripe/payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Rightcart from '../components/cart/rightcart'
import { saveOrderData } from '../services/api/saveorder.services'
import { getCustomerId } from '../helpers/account'
import { getCartList } from '../components/common/cartlist'
import { getProductPrice, getShippingCost } from '../helpers/cart'
import PaypalButton from '../components/payment/paypal/paypal'

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export default function Checkout_shipping(props) {
    const [paymentData, setPaymentData] = useState([])
    const [paymentOption, setPaymentOption] = useState(null)
    const paymentDb = JSON.parse(localStorage.getItem('checkoutData'))
    const [checkout, setCheckout] = React.useState(false);
    const [productData, setProductData] = useState([])
    const [shippingCost, setShippingCost] = useState(null)
    const [total, setTotal] = useState(null)
    const [paymentMode] = useState('online')
    const [filter, setFilter] = useState([])
    const customer_id = getCustomerId()
    const [order_id, setOrder_id] = useState(null)

    const createOrder = () => {
        //  console.log(productData)   
        return saveOrderData(customer_id, paymentDb[0].shipping_data.email, paymentDb[0].shipping_data.phone, paymentDb[0].shipping_data.name, paymentDb[0].shipping_data.surname, paymentDb[0].shipping_data.company, paymentDb[0].shipping_data.address, paymentDb[0].shipping_data.etc, paymentDb[0].shipping_data.city, paymentDb[0].shipping_data.state, paymentDb[0].shipping_data.country, paymentDb[0].shipping_data.zipcode, paymentDb[0].billing_data.billingname, paymentDb[0].billing_data.billingsurname, paymentDb[0].billing_data.billingcompany, paymentDb[0].billing_data.billingaddress, paymentDb[0].billing_data.billingetc, paymentDb[0].billing_data.billingcity, paymentDb[0].billing_data.billingstate, paymentDb[0].billing_data.billingcountry, paymentDb[0].billing_data.billingzipcode, JSON.stringify(productData), shippingCost, total, paymentMode, paymentOption == 0 ? 'stripe' : 'paypal')
    }

    useEffect(() => {
        async function getPaymentData() {
            await setShippingCost(getShippingCost('en'))
            await getCartList()
                .then(res => {
                    setFilter(res)
                    let productArray = []
                    for (var prod_res of res) {
                        productArray.push({
                            id: prod_res.id,
                            name: prod_res.title,
                            qty: prod_res.qty,
                            price: prod_res.price,
                            img1: prod_res.img_new
                        })
                    }
                    setProductData(productArray)
                })
            await setTotal(getProductPrice(filter))
            // console.log(total)
            await setPaymentData(paymentDb)
        }
        getPaymentData()

        if (!(paymentOption == null) && (order_id == null || order_id == 'undefined')) {
            createOrder()
                .then(res => setOrder_id(res.data.order_id))
        }
    }, [total, paymentOption])
    return (
        <div>
            <Header />
            {paymentData.map(function (x) {
                return (
                    <div class="container_fluid">
                        <div class="checkout_billing">
                            <h1>{CHECKOUT_JSON.checkout}</h1>
                            <div class="ship_bill_info">
                                <div class="billing_info">
                                    <h2>{CHECKOUT_JSON.customer_shipping_info}</h2>
                                    <NavLink to="/checkout/address">{CHECKOUT_JSON.edit}</NavLink>
                                    <div class="billing_details">
                                        <ul>
                                            <li>{x.shipping_data.email}</li>
                                            <li>{x.shipping_data.name} {x.shipping_data.surname}</li>
                                            <li>{x.shipping_data.company} {x.shipping_data.address} {x.shipping_data.etc}</li>
                                            <li>{x.shipping_data.city} {x.shipping_data.state} {x.shipping_data.zipcode}</li>
                                            <li>{x.shipping_data.country}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="shipping_info">
                                    <h2>{CHECKOUT_JSON.billing_address}</h2>
                                    <NavLink to="/checkout/address">{CHECKOUT_JSON.edit}</NavLink>
                                    <div class="shipping_details">
                                        <ul>
                                            <li>{x.billing_data.billingemail}</li>
                                            <li>{x.billing_data.billingname} {x.billing_data.billingsurname}</li>
                                            <li>{x.billing_data.billingcompany} {x.billing_data.billingaddress} {x.billing_data.billingetc}</li>
                                            <li>{x.billing_data.billingcity} {x.billing_data.billingstate} {x.billing_data.billingzipcode}</li>
                                            <li>{x.billing_data.billingcountry}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="payment">
                                    <h3>{CHECKOUT_JSON.payment}</h3>
                                    <div class="payment_form">
                                        <div class="paypal">
                                            <input type="radio" id="paypal" name="payment_option" /><label for="paypal" onClick={() => setPaymentOption(1)}>{CHECKOUT_JSON.paypal}</label>
                                            <div class="paypal_img">
                                                <img src="../images/paypal.png" alt="paypal" />
                                            </div>
                                        </div>
                                        <div class="paypal">
                                            <input type="radio" id="card" name="payment_option" /><label for="card" onClick={() => setPaymentOption(0)}>{CHECKOUT_JSON.credit_card} </label>
                                            <div class="paypal_img">
                                                <img src="../images/amex.png" alt="Amex" />
                                                <img src="../images/card.png" alt="card" />
                                                <img src="../images/disc.png" alt="dice" />
                                                <img src="../images/visaicon.png" alt="visaicon" />
                                                <img src="../images/icon.png" alt="visaicon" />
                                            </div>
                                        </div>
                                        <div class="paypal_mobile">
                                            <input type="radio" id="paypal" name="payment_option" /><label for="paypal" onClick={() => setPaymentOption(1)}>{CHECKOUT_JSON.paypal}</label>
                                            <div class="paypal_img_mobile">
                                                <img src="../images/paypal.png" alt="paypal" />
                                            </div>
                                        </div>
                                        <div class="paypal_mobile">
                                            <input type="radio" id="card" name="payment_option" /><label for="card" onClick={() => setPaymentOption(0)}>{CHECKOUT_JSON.credit_card} </label>
                                            <div class="paypal_img_mobile">
                                                <img src="../images/amex.png" alt="Amex" />
                                                <img src="../images/card.png" alt="card" />
                                                <img src="../images/disc.png" alt="dice" />
                                                <img src="../images/visaicon.png" alt="visaicon" />
                                                <img src="../images/icon.png" alt="visaicon" />
                                            </div>
                                        </div>
                                        {paymentOption == 0 ?
                                            <div class="payment_table">
                                                <ul>
                                                    <li><span><label>{CHECKOUT_JSON.card_name}</label></span> </li>
                                                    <li> <input type="text" placeholder="Name on card" />  </li>
                                                </ul>
                                                <Elements stripe={stripePromise}>
                                                    <CheckoutForm customer_id={customer_id} order_id={order_id} />
                                                </Elements>
                                            </div>
                                            : null}
                                    </div>
                                </div>
                            </div>


                            <div class="cart_details">
                                <Rightcart />
                       
                                <div class="shade_continue_btn">
                                           
                                    {paymentOption == 1 ? <PaypalButton total={total} customer_id={customer_id} order_id={order_id} />  : null}
                                    <div class="comeback"><NavLink to="/cart">{CHECKOUT_JSON.back_cart}</NavLink></div>  
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    );

}


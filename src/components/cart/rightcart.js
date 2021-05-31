import React, { Component, useState, useEffect } from 'react'
import { getCartList } from '../../components/common/cartlist'
import { getProductPrice, getShippingCost } from '../../helpers/cart'
import { NavLink } from 'react-router-dom'
import { CURRENCY } from '../../constant/currency'
import { ORDERDETAILS_JSON} from '../../constant/translate'

export default function Rightcart(props) {
    const [filterdata, setFilterdata] = useState([])

    useEffect(() => {
        getCartList()
            .then(res => {
                setFilterdata(res)
            })
    }, [])

 

    return (
        <>
            
                <h3>{ORDERDETAILS_JSON.order_summary}</h3>
                <div class="shade_cart_billing">
                    <div class="items_details">
                        {filterdata.map((data) => {
                            return (
                                <ul>
                                    <li>{data.img1 == 'NULL'? <img src='../../images/no_image.jpg' alt={data.title} /> : <img src={data.img1} alt={data.title} /> }</li>
                                    <li>{data.title} x {data.qty} </li>
                                    <li>{data.price * data.qty}</li>
                                </ul>
                            )                          

                        })}
                    </div>

                    <div class="items_details_mobile">
                        
                        {filterdata.map((data) => {
                            return (
                                <ul>
                                <li><img src={data.img1} alt={data.title} /></li>
                                <li>{data.title} x {data.qty} 
                                    <span><h6>{data.price * data.qty}</h6></span></li>
    
    
                            </ul>
                            )                          

                        })}

                    </div>

                    <div class="product_total">
                        <ul>
                            <li>{ORDERDETAILS_JSON.subtotal}</li>
                            <li>{CURRENCY} {getProductPrice(filterdata)}</li>
                        </ul>
                        <ul>
                            <li>{ORDERDETAILS_JSON.shipping}</li>
                            <li>{CURRENCY} {getShippingCost('es')}</li>
                        </ul>
 
                    </div>

                    <div class="final_price">
                        <ul>
                            <li><h5>{ORDERDETAILS_JSON.total}</h5></li>
                            <li><h5>{CURRENCY} {getProductPrice(filterdata) + getShippingCost('es')}</h5></li>
                        </ul>
                    </div>

                </div>

                
        </>
    )
}
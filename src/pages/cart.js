import React, { useReducer, useEffect, useState } from 'react'
import White_header from '../components/header/white-header'
import White_footer from '../components/footer/white-footer'
import { CART_JSON } from '../constant/translate'
import { quantitychanger } from '../helpers/quantity'
import { getCartList } from '../components/common/cartlist'
import { cartStoredData, clearCart, getProductPrice, removeProduct } from '../helpers/cart'
import { NavLink } from 'react-router-dom'
import { CURRENCY } from '../constant/currency'
import { useDispatch } from 'react-redux';
import { decreaseQuanity, increaseQuanity } from '../redux/actions/product.actions';
import { useSelector } from 'react-redux';
import { addQuantity, removeQuantity } from '../helpers/cart'


const initialState = 0

function Cart() {
    const [filterdata, setFilterdata] = useState([])
    
    // const [qty, setQty] = useState([])
    const dispatchQty = useDispatch();
    const getValue = useSelector((state) => state.IncreaseQtyReducer)

    useEffect(() => {
        getCartList()
            .then(res => {
                console.log(res)
                setFilterdata(res)
            })

        console.log(getValue)

    }, [])

    return (
        <div>
            <White_header />
            <div class="container_fluid content_page">
                <div class="view_cart">
                    <h1>{CART_JSON.cart}</h1>
                    <div class="viewcart_table">
                        {filterdata.length > 0 ?
                            <ul>
                                <li><h4>{CART_JSON.product}</h4></li>
                                <li><h4> </h4></li>
                                <li><h4>{CART_JSON.price}</h4></li>
                                <li><h4>{CART_JSON.quantity}</h4></li>
                            </ul> :null}

                        {filterdata.map((val) => {
                            return (
                                <>
                                    <img onClick={() => removeProduct(val.id)} style={{ position: "absolute", margin: "50px -172px", cursor:"pointer",  }} src="../../images/cancel.png" alt="Delete Qty" />
                                    <ul>
                                        <li> 
                                        {val.img1 == 'NULL'? <img src='../../images/no_image.jpg' alt={val.title} /> : <img src={val.img1} alt={val.title} /> }
                                        </li>
                                        <li>{val.description}
                                            <span>{val.subtitle}</span></li>
                                        <li><div class="viewcart_productprice">{CURRENCY} {val.price}</div></li>
                                        <li>
                                            {/* {val.qty} */}
                                            <div class="quantity_button">
                                                <button type="button" onClick={() => removeQuantity(val.id, val.qty)}>-</button>
                                                <input type="text" value={val.qty} />
                                                <button type="button" onClick={() => addQuantity(val.id)}>+</button>
                                            </div>
                                        </li>
                                    </ul>
                                </>
                            )
                        })}
                    </div>
                </div>
                {filterdata.length > 0 ?
                    <div class="viewcart_butttons">
                        <h5>{CART_JSON.sub_total}  <span>{CURRENCY} {getProductPrice(filterdata)}</span><span>&#40; {filterdata.length} {CART_JSON.products}&#41;:</span></h5>
                        <div class="continueshoping"><button onClick={()=>clearCart()}>{CART_JSON.clear}</button></div>
                        <div class="continueshoping"><NavLink to={'/category/all'}>{CART_JSON.continue_shopping}</NavLink></div>
                        <div class="proceedtocheckout"><NavLink to={'/checkout/address'}>{CART_JSON.checkout}</NavLink></div>
                    </div>
                    : null}
            </div>
            <White_footer />
        </div>
    );
}

export default Cart;

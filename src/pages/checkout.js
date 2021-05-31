import React, { Component } from 'react'
import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import { CHECKOUT_JSON , ADDADDRESS_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';
function Checkout() {
    return (
        <div>
            <Header />
            <div class="container_fluid">  
            <div class="checkout_address checkout_billing">
                    <h1>{CHECKOUT_JSON.checkout}</h1> 
                <div class="customer_info">
                    
                            <h3>{CHECKOUT_JSON.customer_shipping_info}</h3>                            
                            <div class="email_form">
                                <ul>
                                
                                    <li>{ADDADDRESS_JSON.email}</li>
                                    <li>
                                        <input type="email" placeholder={ADDADDRESS_JSON.example_email} />
                                    </li>                                
                                </ul>
                            </div> 
                            <div class="ship_bill_info">
                                <div class="shipping_info">  
                                    <h2>{CHECKOUT_JSON.address_default}</h2>
                                    <NavLink to="/edit-address">{CHECKOUT_JSON.edit}</NavLink>
                                        <div class="shipping_details">
                                            <ul>
                                                <li>Stesso indirizzo di spedizione</li>
                                                <li>John Doe</li>
                                                <li>Via della Repubblica 23</li>
                                                <li>Desenzano del Garda, 25010, BS</li>
                                                <li>Italia</li>
                                            </ul>
                                        </div>
                                </div>
                             </div>


                    <div class="goto_billing">
                            <h3>{CHECKOUT_JSON.billing_address}</h3>
                            <ul>
                            <li>
                                <input type="radio" name="shippingaddress" checked /><span>{CHECKOUT_JSON.use_shipping}</span>                              
                            </li>
                            <li>                                
                                <input type="radio" name="shippingaddress" /><span>{CHECKOUT_JSON.diff_billing}</span>
                            </li>
                            </ul>
                    </div>
             
                </div>





            <div class="cart_details">
                <h3>{CHECKOUT_JSON.order_summary}</h3>
                <div class="shade_cart_billing">
                <div class="items_details">
                    <ul>
                        <li><img src="images/shade_product1.png" alt="product image" /></li>
                        <li>Cartuccia Galatron <span>M25 Body leva plastic</span><span>lever ±12,5°</span><span><NavLink to="/checkout">x2</NavLink></span></li>
                        <li>€20.00</li>
                                                
                    </ul>
                    <ul>
                        <li><img src="images/shade_product1.png" alt="product image" /></li>
                        <li>Cartuccia Galatron <span>M25 Body leva plastic</span><span>lever ±12,5°</span><span><NavLink to="/checkout">x1</NavLink></span> </li>
                        <li>€20.00</li>
                        
                    </ul>

                </div>  
                   
                    <div class="items_details_mobile">
                        <ul>
                            <li><img src="images/shade_product1.png" alt="product image" /></li>
                            <li>Cartuccia Galatron <span>M25 Body leva plastic</span><span>lever ±12,5°</span><span><NavLink to="/checkout">x2</NavLink></span>
                            <span><h6>€20.00</h6></span></li>
                            
                                                    
                        </ul>
                        <ul>
                            <li><img src="images/shade_product1.png" alt="product image" /></li>
                            <li>Cartuccia Galatron <span>M25 Body leva plastic</span><span>lever ±12,5°</span><span><NavLink to="/checkout">x1</NavLink>
                            </span>
                            <span><h6>€20.00</h6></span> </li>
                                                        
                        </ul>
    
                    </div>

                <div class="product_total">
                    <ul>
                        <li>{CHECKOUT_JSON.subtotal}</li>
                        <li>€60.00</li>
                    </ul>
                    <ul>
                        <li>{CHECKOUT_JSON.shipping}</li>
                        <li>€7.50</li>
                    </ul>
                    <ul>
                        <li>{CHECKOUT_JSON.tax}</li>
                        <li>€1.25</li>
                    </ul>
                </div>
                    
                <div class="final_price">
                     <ul>
                    <li><h5>{CHECKOUT_JSON.total}</h5></li>
                    <li><h5>€68.75</h5></li>
                    </ul>
                </div>
                    

                
                </div>                
                <div class="shade_continue_btn">  
                    <div class="comeback"><NavLink to="/cart">{CHECKOUT_JSON.back}</NavLink></div>  
                    <div class="placeorder"><NavLink to="/order-confirm">{CHECKOUT_JSON.place_order}</NavLink></div>           
                </div>

               

                </div>  
            </div>
        </div> 
            <Footer />
        </div>
    );
}

export default Checkout;

import React, { Component, useState, useEffect } from 'react'
import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import { CHECKOUT_JSON, ADDADDRESS_JSON } from '../constant/translate'
import { NavLink, useHistory } from 'react-router-dom';
import Rightcart from '../components/cart/rightcart'
import{ country_list } from '../constant/countryList'


export default function Address() {

    const [email, setEmail] = useState(null)
    const [name, setname] = useState(null)
    const [surname, setsurname] = useState(null)
    const [company, setcompany] = useState(null)
    const [address, setaddress] = useState(null)
    const [etc, setetc] = useState(null)
    const [city, setcity] = useState(null)
    const [state, setstate] = useState(null)
    const [zipcode, setzipcode] = useState(null)
    const [country, setcountry] = useState(null)
    const [phone, setphone] = useState(null)

    const [billingname, setbillingname] = useState(null)
    const [billingsurname, setbillingsurname] = useState(null)
    const [billingcompany, setbillingcompany] = useState(null)
    const [billingaddress, setbillingaddress] = useState(null)
    const [billingetc, setbillingetc] = useState(null)
    const [billingcity, setbillingcity] = useState(null)
    const [billingstate, setbillingstate] = useState(null)
    const [billingzipcode, setbillingzipcode] = useState(null)
    const [billingcountry, setbillingcountry] = useState(null)
    const [billingphone, setbillingphone] = useState(null)
    // const [value,setvalue] = useState(null)

    const [differentAddress, setDifferentAddress] = useState(false)
    const [productData, setProductData] = useState([])
    const history = useHistory()


    const sendData = {
        'email': email,
        'name': name,
        'surname': surname,
        'company': company,
        'address': address,
        'etc': etc,
        'city': city,
        'state': state,
        'zipcode': zipcode,
        'country': country,
        'phone': phone,


    }
    const billingdata = {

        'billingname': differentAddress ? billingname : name,
        'billingsurname': differentAddress ? billingsurname : surname,
        'billingcompany': differentAddress ? billingcompany : company,
        'billingaddress': differentAddress ? billingaddress : address,
        'billingetc': differentAddress ? billingetc : etc,
        'billingcity': differentAddress ? billingcity : city,
        'billingstate': differentAddress ? billingstate : state,
        'billingzipcode': differentAddress ? billingzipcode : zipcode,
        'billingcountry': differentAddress ? billingcountry : country,
        'billingphone': differentAddress ? billingphone : phone

    }


    const validateForm = () => {
        let validate = true
        if(email == null) {
            alert('Please enter email address')
            validate = false
        } else if(name == null) {
            alert('Please enter name')
            validate = false
        } else if(phone == null) {
            alert('Please enter phone')
            validate = false     
        } 

        if(validate == true) {
            var cartStorage = [{
                'shipping_data' : sendData,
                'billing_data' : billingdata
            }]
            localStorage.setItem('checkoutData',JSON.stringify(cartStorage))
            history.push('/checkout/payment')
        }
    }

    return (
        <div>
            <Header />
            <div class="container_fluid">
                <div class="checkout_address">
                    <h1>{CHECKOUT_JSON.checkout}</h1>
                    <div class="customer_info">
                        <h3>{CHECKOUT_JSON.customer_shipping_info}</h3>
                        <div class="email_form">
                            <ul>

                                <li>{ADDADDRESS_JSON.email}</li>
                                <li>
                                    <input type="email" value={email} placeholder={ADDADDRESS_JSON.example_email} onChange={(e) => setEmail(e.target.value)} />
                                </li>

                            </ul>
                        </div>
                        <div class="customer_form">
                            <h3>{CHECKOUT_JSON.address_default}</h3>
                            <ul>
                                <li>{ADDADDRESS_JSON.name}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_name} onChange={(e) => setname(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.surname}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_surname} onChange={(e) => setsurname(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.company}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_company} onChange={(e) => setcompany(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.address}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_address} onChange={(e) => setaddress(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.apartment}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_apartment} onChange={(e) => setetc(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.city}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_city} onChange={(e) => setcity(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.state}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_state} onChange={(e) => setstate(e.target.value)} />
                                </li>
                            </ul>
                            {/* <ul>
                                <li>{ADDADDRESS_JSON.state}</li>
                                <li>
                                    <select onClick={(e) => setstate(e.target.value)}>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Haryana">Haryana</option>
                                    </select>

                                </li>
                            </ul> */}
                            <ul>
                                <li>{ADDADDRESS_JSON.zip_code}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_zipcode} onChange={(e) => setzipcode(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.country}</li>
                                <li>
                                    <select onChange={(e) => setcountry(e.target.value)}>
                                        {country_list.map((val)=><option value={val}>{val}</option> )}
                                        
                                    </select>

                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.phone}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_phone}  onChange={(e) => setphone(e.target.value)} />
                                </li>
                            </ul>



                        </div>
                        {/* <div class="shade_continue_btn_form">
                            <div class="comeback"><NavLink to="/cart">{CHECKOUT_JSON.cancel}</NavLink></div>
                            <div class="placeorder"><NavLink to="/edit-address">{CHECKOUT_JSON.edit_address}</NavLink></div>
                        </div> */}

                        <div class="goto_billing">
                            <h3>{CHECKOUT_JSON.billing_address}</h3>
                            <ul>
                                <li>
                                    <input type="radio" name="shippingaddress" id="same" checked  /><label for="same" onClick={() => setDifferentAddress(false)}>{CHECKOUT_JSON.use_shipping}</label>
                                </li>
                                <li>
                                    <input type="radio" name="shippingaddress" id="different"  /><label for="different" onClick={() => setDifferentAddress(true)}>{CHECKOUT_JSON.diff_billing}</label>
                                </li>
                            </ul>
                        </div>
                        <div className={differentAddress ? 'customer_form' : 'hidden'}>
                            <h3>{CHECKOUT_JSON.address_default}</h3>
                            <ul>
                                <li>{ADDADDRESS_JSON.name}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_name} onChange={(e) => setbillingname(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.surname}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_surname} onChange={(e) => setbillingsurname(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.company}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_company} onChange={(e) => setbillingcompany(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.address}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_address} onChange={(e) => setbillingaddress(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.apartment}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_apartment} onChange={(e) => setbillingetc(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.city}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_city} onChange={(e) => setbillingcity(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.state}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_state} onChange={(e) => setstate(e.target.value)} />
                                </li>
                            </ul>
                            {/* <ul>
                                <li>{ADDADDRESS_JSON.state}</li>
                                <li>
                                    <select onClick={(e) => setbillingstate(e.target.value)}>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Haryana">Haryana</option>
                                    </select>

                                </li>
                            </ul> */}
                            <ul>
                                <li>{ADDADDRESS_JSON.zip_code}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_zipcode} onChange={(e) => setbillingzipcode(e.target.value)} />
                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.country}</li>
                                <li>
                                    <select onChange={(e) => setbillingcountry(e.target.value)}>                    
                                        {country_list.map((val)=><option value={val}>{val}</option> )}                                        
                                    </select>

                                </li>
                            </ul>
                            <ul>
                                <li>{ADDADDRESS_JSON.phone}</li>
                                <li>
                                    <input type="text" placeholder={ADDADDRESS_JSON.example_phone} onChange={(e) => setbillingphone(e.target.value)} />
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="cart_details">
                    <Rightcart />
                    <div class="shade_continue_btn">
                    <div class="comeback"><NavLink to="/cart">{CHECKOUT_JSON.back_cart}</NavLink></div>
                    <div class="placeorder"><button onClick={()=>validateForm()}>{CHECKOUT_JSON.continue}</button></div>
                </div>



            </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}



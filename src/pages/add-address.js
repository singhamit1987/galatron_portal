import Header from '../components/header/white-header'
import Footer from '../components/footer/white-footer'
import Left from '../components/menu/left-menu'
import { ADDADDRESS_JSON,LEFTMENU_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';

export default function Registration () {

    return(
        <>
            <Header />
            <div class="container_fluid">
            <div class="account_details">
                <h1>{ADDADDRESS_JSON.account}</h1>
                <Left/>

                <div class="update_address"> 
                    <h3>{ADDADDRESS_JSON.new_address}</h3>
                <form method="GET" class="edit_address_form">
                    
                    <ul>
                        <li>{ADDADDRESS_JSON.name}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_name} />
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.surname}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_surname} />
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.company}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_company} />
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.address}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_address} />
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.apartment}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_apartment} />
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.city}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_city} />
                        </li>
                    </ul>
                    {/* <ul>
                        <li>{ADDADDRESS_JSON.city}</li>
                        <li>
                            <select>
                                <option>Desenzano del Garda</option>
                                <option>Desenzano del Garda</option>
                                <option>Desenzano del Garda</option>
                            </select> 
                        </li>
                    </ul> */}
                    <ul>
                        <li>{ADDADDRESS_JSON.state}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_state} /> 
                           
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.zip_code}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_zipcode} /> 
                           
                        </li>
                    </ul>
                    {/* <ul>
                        <li>{ADDADDRESS_JSON.zip_code}</li>
                        <li>
                            <select>
                                <option>25010</option>
                                <option>25010</option>
                                <option>25010</option>
                            </select> 
                        </li>
                    </ul> */}
                    <ul>
                        <li>{ADDADDRESS_JSON.country}</li>
                        <li>
                            <input type="text" placeholder={ADDADDRESS_JSON.example_country} />
                        </li>
                    </ul>
                    <ul>
                        <li>{ADDADDRESS_JSON.phone}</li>
                        <li>
                            <input type="text" placeholder="+39 3456789123" />
                        </li>
                    </ul>

                    
                </form>
            
                <div class="set_default_address">
                    <ul>
                    <li>
                        <input type="checkbox" name="default address" /><span>{ADDADDRESS_JSON.set_default}</span>                              
                    </li>
                    </ul>
                </div>

                <div class="change_address_btn">  
                    <div class="change_address"><NavLink to="/address">{ADDADDRESS_JSON.add_address}</NavLink></div>  
                               
                </div>
                </div>
            </div>
        </div>

          

            <Footer />

        </>
    )
}
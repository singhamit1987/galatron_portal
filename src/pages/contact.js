import React, { Component } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { CONTACT_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  

function Contact() {
    return (
        <div>
            <Header />
                <div class="container">
                    <div class="contact_us_heading" id="contact">
                        <h2>{CONTACT_JSON.contact}</h2>                
                    </div>
                </div>   


                <div class="container">
                    <form method="GET" class="myform">
                        <ul>
                            <li>
                                <input type="text" placeholder={CONTACT_JSON.example_namesurname} required />
                            </li>
                            <li>
                                <input type="email" placeholder={CONTACT_JSON.example_email2} required />
                            </li>
                            <li>
                                <textarea placeholder={CONTACT_JSON.example_message} required></textarea>
                            </li>
                            <li>
                                <input type="checkbox" required /> <label>{CONTACT_JSON.authorize} <NavLink to="/privacy">{CONTACT_JSON.privacy_policy}</NavLink></label>
                            </li>
                            <li>
                                <input type="submit" value={CONTACT_JSON.send} />
                            </li>
                        </ul>           
                    </form>
                </div> 



               <div class="container">
                <div class="contact_us_info">
                    <div class="contact_us_map">
                        <img src="images/map_conactus.png" alt="map"/>
                    </div>
                    <div class="contact_us_text">
                        <ul>
                            <li>
                                <h3>{CONTACT_JSON.galatron_plast}</h3>
                                <p>{CONTACT_JSON.spa_address1}
                                    <span>{CONTACT_JSON.spa_address2}</span>
                                </p>
                            </li>
                            <li>
                                <h3>{CONTACT_JSON.prod_unit}</h3>
                                <p>{CONTACT_JSON.prod_address1}
                                <span>{CONTACT_JSON.prod_address2}</span>
                                </p>
                            </li>
                            <li>
                                <h3>{CONTACT_JSON.number}</h3>
                                <p>   <Callto phone="+390376630778">+39 0376 630778</Callto>
                                      <Callto phone="+393455547615">{CONTACT_JSON.dpt_commercial_italy} :  +39 345 554 7615</Callto>
                                      <Callto phone="+393455537608">{CONTACT_JSON.dpt_commercial_foreign} :  +39 345 553 7608</Callto>
                                      <Callto phone="+393496189929">{CONTACT_JSON.dpt_commercial_manage} :  +39 349 618 9929</Callto>
                                </p>
                            </li>
                            <li>
                                <h3>{CONTACT_JSON.email}</h3>
                                <p>                 
                                <Mailto email="sales@galatron.it" subject=" " body=" ">  {CONTACT_JSON.email_comm_dpt} :  sales@galatron.it   </Mailto>
                                <Mailto email="logistic@galatron.it" subject=" " body=" ">  {CONTACT_JSON.email_purchase_dpt} :  logistic@galatron.it   </Mailto>
                                <Mailto email="technicaldpt@galatron.it" subject=" " body=" ">  {CONTACT_JSON.email_tech_dpt} :  technicaldpt@galatron.it   </Mailto>
                                <Mailto email="ecommerce@galatron.it" subject=" " body=" ">  {CONTACT_JSON.spare_parts_dpt} :  ecommerce@galatron.it   </Mailto>
                                </p>
                            </li>
                            <li>
                                <h3>{CONTACT_JSON.legal_notes}</h3>
                                <p>
                                    <span>{CONTACT_JSON.vat} </span>
                                    <span>{CONTACT_JSON.capt_social}</span>
                                    <span>{CONTACT_JSON.rea} </span>
                                    <span>{CONTACT_JSON.reg}</span>    
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

             </div>     
            <Footer />
        </div>
    );
}

export default Contact;

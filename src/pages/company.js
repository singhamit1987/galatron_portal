import React, { Component } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import companypage from '../lang/en/company.json'
import { COMPANY_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from '../helpers/scrolltop'


function Company() {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <div class="company_banner" id="company">
            <img src="images/company_banner.png" alt="Company Banner" /> 
            <h2>{COMPANY_JSON.our_company}</h2>
            </div>

            <div class="company_banner_mobile" id="company">
                <img src="images/company_banner_mobile.png" alt="Company Banner" /> 
                <h2>{COMPANY_JSON.our_company}</h2>
            </div>

       

       

       

        <div class="container">
            <div class="about_company">
                <div class="topics_name" >
                    <ul>
                        <li>  <HashLink to="/company#ourstory"><span>I. </span> {COMPANY_JSON.our_story}</HashLink></li>
                        <li> <HashLink to="/company#madeinitaly"><span>II. </span>{COMPANY_JSON.made_in_italy}</HashLink></li>
                        <li>  <HashLink to="/company#development"><span>III. </span> {COMPANY_JSON.development}</HashLink></li>
                        <li>  <HashLink to="/company#ourteam"><span>IV.</span> {COMPANY_JSON.our_team}</HashLink></li>
                    </ul>
                </div>

                
                
                <div class="our_history" id="ourstory" >  
                    <h2>{COMPANY_JSON.our}
                         <span>{COMPANY_JSON.story}</span></h2>
                         <div class="history_section">
                             <div class="history_section_subhead">
                                <h4>{COMPANY_JSON.historical}
                                    <span> {COMPANY_JSON.company}</span></h4>
                             </div>
                             <div class="history_section_para">
                                <p>{COMPANY_JSON.history_section_para1}



                                    <span>{COMPANY_JSON.history_section_para2}</span></p>
                             </div>
                         </div>           
                </div>
            </div>
        </div>

            
        

        

        <div class="container">
            <div class="energy_saving" >
                <div class="energy_saving_image">
                    <img src="images/energy_saving.png" alt="energy saving" />                    
                </div>                
                <div class="energy_saving_text">
                    <h4>{COMPANY_JSON.c3energy}                        
                        <span>{COMPANY_JSON.water_save}   </span></h4>
                        <div class="energy_saving_image_mobile">
                            <img src="images/energy_saving_mobile.png" alt="energy saving" />
                        </div>
                    <p>{COMPANY_JSON.energy_saving_para}  </p>
                </div>
            </div>
            
        </div>

       

        <div class="curve_blue">

        </div>
        
            <div class="container_fluid">
                <div class="manufacturing" id="madeinitaly">
                    
                    <h2>{COMPANY_JSON.made_in}
                        <span>{COMPANY_JSON.italy}</span>
                    </h2>

                              
                        <div class="slider_outer">                            
                            <div class="owl-carousel owl-theme" id="slider_1">
                                <div class="item"><img src="images/made_in_italy.png" alt="product made in italy" /></div> 
                                <div class="item"><img src="images/made_in_italy.png" alt="product made in italy" /></div>                                                                               
                            </div>            
                        </div> 

                    <div class="manufacturing_text">
                        <div class="manufacturing_heading">
                            <h4>{COMPANY_JSON.passion}
                                <span>{COMPANY_JSON.profession}</span></h4>
                        </div>
                        <div class="manufacturing_detail">
                            <p>{COMPANY_JSON.manufacturing_para1}
                            <span>{COMPANY_JSON.manufacturing_para2}</span></p>
                        </div>

                    </div>
                </div>
                
            </div>
            
        

        
            <div class="container_fluid">
                <div class="development"  id="development">
                    <h2>{COMPANY_JSON.development}</h2>
                    <div class="development_images">
                        <img src="images/development.png" alt="development storage" />
                        <img src="images/development_process.png" alt="development process" />
                        <h4>{COMPANY_JSON.quality}</h4>
                        <img src="images/development_office.png" alt="development_office" />
                    </div>
                    <div class="development_text">
                        <h4>{COMPANY_JSON.our_customers}</h4>
                        <p>{COMPANY_JSON.development_para1}
                        <span>{COMPANY_JSON.development_para2}</span></p>
                    </div>
                    <div class="development_images_mobile">                        
                        <h4>{COMPANY_JSON.quality}</h4>
                        <img src="images/development_office.png" alt="development_office" />
                    </div>
                </div>
            </div>
        


        
        <div class="curve_white">

        </div>   
        <div class="container">
            <div class="our_team" id="ourteam">
                <div class="our_team_heading">
                    
                    <h2>{COMPANY_JSON.our2} 
                        <span>{COMPANY_JSON.team}</span>
                      </h2>
                      <h4>{COMPANY_JSON.proff}                        
                          <span>{COMPANY_JSON.butfirst}  </span>
                          <span>{COMPANY_JSON.people} </span>
                      </h4>
                </div>
                <div class="our_team_members">
                    <ul>
                        <li>
                            <img src="images/general_manager.png" alt="general manager"/>
                            <h5>Alberto Benedetti</h5>
                            <h6>General manager</h6>
                        </li>
                        <li>
                            <img src="images/administration.png" alt="Administration"/>
                            <h5>Monica Beschi</h5>
                            <h6>Administration</h6>
                        </li>
                        <li>
                            <img src="images/sales_coordinator.png" alt="Sales Coordinator"/>
                            <h5>Denisa Vaduva</h5>
                            <h6>Sales Coordinator</h6>
                        </li>
                        <li>
                            <img src="images/sales_support.png" alt="Sales Support"/>
                            <h5>Chiara Pomati</h5>
                            <h6>Sales Support</h6>
                        </li>
                        <li>
                            <img src="images/supply_chain.png" alt="Supply Chain"/>
                            <h5>Simone Veggio</h5>
                            <h6>Supply Chain</h6>
                        </li>
                        <li>
                            <img src="images/production.png" alt="Production"/>
                            <h5>Roberto Marchesin</h5>
                            <h6>Production</h6>
                        </li>
                        <li>
                            <img src="images/r_d.png" alt="R &amp; D"/>
                            <h5>Daniele Perlato</h5>
                            <h6>R&amp;D</h6>
                        </li>
                        <li>
                            <img src="images/quality.png" alt="Quality"/>
                            <h5>Federica Premoli</h5>
                            <h6>Quality</h6>
                        </li>
                        <li>
                            <img src="images/r_d_support.png" alt="R &amp; D Support"/>
                            <h5>Paolo Occhionero</h5>
                            <h6>R&amp;D Support</h6>
                        </li>
                    </ul>

                </div>

            <div class="our_team_members_mobile">
                    <div class="container">            
                        <div class="slider_outer">                            
                            <div class="owl-carousel owl-theme" id="slider_3">
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/general_manager.png" alt="general manager"/>
                                            <h5>Alberto Benedetti</h5>
                                            <h6>General manager</h6>
                                        </li>
                                    </ul>    
                                </div>
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/administration.png" alt="Administration"/>
                                            <h5>Monica Beschi</h5>
                                            <h6>Administration</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/sales_coordinator.png" alt="Sales Coordinator"/>
                                            <h5>Denisa Vaduva</h5>
                                            <h6>Sales Coordinator</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/sales_support.png" alt="Sales Support"/>
                                            <h5>Chiara Pomati</h5>
                                            <h6>Sales Support</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/supply_chain.png" alt="Supply Chain"/>
                                            <h5>Simone Veggio</h5>
                                            <h6>Supply Chain</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/production.png" alt="Production"/>
                                            <h5>Roberto Marchesin</h5>
                                            <h6>Production</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                        <img src="images/r_d.png" alt="R &amp; D"/>
                                        <h5>Daniele Perlato</h5>
                                        <h6>R&amp;D</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/quality.png" alt="Quality"/>
                                            <h5>Federica Premoli</h5>
                                            <h6>Quality</h6>
                                        </li>
                                    </ul>    
                                </div> 
                                <div class="item">
                                    <ul>
                                        <li>
                                            <img src="images/r_d_support.png" alt="R &amp; D Support"/>
                                            <h5>Paolo Occhionero</h5>
                                            <h6>R&amp;D Support</h6>
                                        </li>
                                    </ul>    
                                </div>                                                                               
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
                

                <div class="container">
                <div class="company_footer">
                        <img src="images/product_footer.png" alt="company footer" /> 
                        <div class="company_footer_txt">
                            <h2><NavLink to="/category/all">{COMPANY_JSON.products}</NavLink></h2>
                            <NavLink to="/category/all">{COMPANY_JSON.view_products}</NavLink>
                        </div>
                    </div> 
                </div>
            <Footer />
        </div>
        )
    }
export default Company;

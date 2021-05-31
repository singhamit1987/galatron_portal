import React, { Component } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { DOWNLOAD_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Download() {
    return (
        <div>
            <Header />
            <div class="download_banner">
                <img src="images/downloadpage_banner.png" alt="Download page Banner" /> 
                <h2>{DOWNLOAD_JSON.download}</h2>
            </div>
            <div class="download_banner_mobile">
                <img src="images/downloadpage_banner_mobile.png" alt="Download page Banner" /> 
                <h2>{DOWNLOAD_JSON.download}</h2>
            </div>



            <div class="container">
                <div class="download_product">
                    <ul>
                        <li><span>
                           
                           
                            </span>
                            <NavLink to="/files/myfile.pdf" target="_blank" download> <div class="dp_icon1"></div>{DOWNLOAD_JSON.technical_informations}</NavLink></li>
                        <li><span>
                            
                           
                            </span>
                            <NavLink to="/files/myfile.pdf" target="_blank" download><div class="dp_icon2"></div>{DOWNLOAD_JSON.cartridges_catalogue}</NavLink></li>
                        <li><span>
                           
                          
                            </span>
                            <NavLink to="/files/myfile.pdf" target="_blank" download> <div class="dp_icon3"></div>{DOWNLOAD_JSON.diverters}</NavLink></li>
                        <li><span>
                            
                           
                            </span>
                            <NavLink to="/files/myfile.pdf" target="_blank" download><div class="dp_icon4"></div>{DOWNLOAD_JSON.headworks_catalogue}</NavLink></li>
                        <li><span>
                           
                           
                            </span>
                            <NavLink to="/files/myfile.pdf" target="_blank" download> <div class="dp_icon5"></div>{DOWNLOAD_JSON.thermo_stactics}</NavLink></li>
                    </ul>
                </div>
                <div class="download_footer">
                    <div class="download_footer_img">
                        <img src="images/download_footer.png" alt="Download footer" />                 
                    </div> 
                    <div class="download_footer_txt">
                        <h2><HashLink to="/contact#contact">{DOWNLOAD_JSON.contact}</HashLink></h2>
                        <HashLink to to="/contact#contact">{DOWNLOAD_JSON.contact_us}</HashLink>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Download;

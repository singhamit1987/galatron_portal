import React, { Component, useState , useEffect } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { getProductData } from '../services/api/product.service'
import { getFilterData } from '../helpers/category'
import { CATEGORY_JSON } from '../constant/translate'
import { NavLink } from 'react-router-dom';


function Category() {

    const [data , setdata] = useState([])

    useEffect(()=>{
        console.log(getProductData())

        console.log('----------')
        console.log(getFilterData(data, 'diameter'))
 
    })
    
    const pushdata = (e) => {
        data.push(e)
        console.log(data)
    }

 
    return (
        <div>
            <Header />
            <div class="container">
                <div class="product_banner">
                    <img src="images/product_banner_img.png" alt="Galatron Product" />
                    <h2>{CATEGORY_JSON.product}</h2>

                </div>
                <div class="product_banner_mobile">
                    <h2>{CATEGORY_JSON.product}</h2>
                </div>
            </div>
            <div class="curve_blue">

            </div>

            <div class="container_fluid">
                <div class="container">
                    
                    <div class="category">

                        <ul>
                            <li><NavLink to="/category">{CATEGORY_JSON.all}</NavLink></li>
                            <li><NavLink to="/category">{CATEGORY_JSON.cartridges}</NavLink></li>
                            <li><NavLink to="/category">{CATEGORY_JSON.diverters}</NavLink></li>
                            <li><NavLink to="/category">{CATEGORY_JSON.thermostatic}</NavLink></li>
                            <li><NavLink to="/category">{CATEGORY_JSON.headworks}</NavLink></li>
                        </ul>
                    </div>
                    <div class="product_filter">
                        <div class="dropdown">
                            <h4><NavLink to="/category">{CATEGORY_JSON.diameter}</NavLink></h4>
                            <ul>
                                <li><input type="radio" value="" id="checkbox1" value="25" onClick={(e)=>pushdata(e.target.value)} /> <label for="checkbox1">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox2"  /> <label for="checkbox2">35 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox3" /> <label for="checkbox3">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox4" /> <label for="checkbox4">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox5" /> <label for="checkbox5">25 mm</label> </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <h4><NavLink to="/category">{CATEGORY_JSON.type}</NavLink></h4>
                            <ul>
                                <li><input type="radio" value="" id="checkbox6" /> <label for="checkbox6">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox7" /> <label for="checkbox7">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox8" /> <label for="checkbox8">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox9" /> <label for="checkbox9">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox10" /> <label for="checkbox10">25 mm</label> </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <h4><NavLink to="/category">{CATEGORY_JSON.features}</NavLink></h4>
                            <ul>
                                <li><input type="radio" value="" id="checkbox11" /> <label for="checkbox11">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox12" /> <label for="checkbox12">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox13" /> <label for="checkbox13">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox14" /> <label for="checkbox14">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox15" /> <label for="checkbox15">25 mm</label> </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <h4><NavLink to="/category">{CATEGORY_JSON.functions}</NavLink></h4>
                            <ul>
                                <li><input type="radio" value="" id="checkbox16" /> <label for="checkbox16">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox17" /> <label for="checkbox17">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox18" /> <label for="checkbox18">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox19" /> <label for="checkbox19">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox20" /> <label for="checkbox20">25 mm</label> </li>
                            </ul>
                        </div>
                        <div class="dropdown_mobile">
                            <h4><NavLink to="/category">{CATEGORY_JSON.sort}</NavLink></h4>
                            <ul>
                                <li><input type="radio" value="" id="checkbox1" /> <label for="checkbox1">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox2" /> <label for="checkbox2">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox3" /> <label for="checkbox3">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox4" /> <label for="checkbox4">25 mm</label> </li>
                                <li><input type="radio" value="" id="checkbox5" /> <label for="checkbox5">25 mm</label> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container_fluid">
                <div class="product_area">
                    <ul>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>
                        <li><div class="p_img"><img src="images/product_img.png" alt="Product image" /></div><div class="p_name"><NavLink to="/detail">Product A</NavLink></div><div class="p_price">$20.00</div></li>

                    </ul>
                    <div class="product_page_button">
                    <NavLink to="/category">{CATEGORY_JSON.load}</NavLink>
                    </div>
                </div>
            </div>
            <div class="curve_white">

            </div> 
            <div class="container">            
                <div class="catalog">
                <div class="catalog_img">
                        <img src="images/download_bg.png" alt="catalog" />                 
                    </div>                    
                    <div class="catalog_txt">                  
                        <h2><NavLink to="/download">{CATEGORY_JSON.download}</NavLink></h2>
                         <NavLink to="/download">{CATEGORY_JSON.downloadcatalogues}</NavLink>
                    </div>
                </div>
            </div>

          
            <Footer />
        </div>
    );
}

export default Category;

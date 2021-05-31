import React, { Component, useState, useEffect } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { getProductData, getProductByCatId } from '../services/api/product.service'
import { getCategoriesData } from '../services/api/category.service'
import { getCategories } from '../components/common/categorylist'
import { getProductList } from '../components/common/productlist'
import { getRegistrationData } from '../services/api/registration.service'
import { getFilterData } from '../helpers/category'
import { NavLink, useParams } from 'react-router-dom';
import { CATEGORY_JSON } from '../constant/translate'
import ScrollToTop from '../helpers/scrolltop'

function Category() {
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState([])
    const { cat_id } = useParams()
    const [checkfilter, setCheckfilter] = useState(null)
    const [refresh, refreshstate] = useState(null)
    const [currentLang, setCurrentLang] = useState('en')
    const [diameter, setDiameter] = useState(null)
    const [type, setType] = useState(null)
    const [features, setFeatures] = useState(null)
    const [functions, setFunctions] = useState(null)



    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    useEffect(() => {
        
        // Get ALl Categories API Data
        getCategoriesData()
            .then((response) => setCategories(response.data.data))
            .catch((error) => alert('Category not Loaded Properly, Please Refresh Page'))
        if (cat_id == 'all') {
            getProductData()
                .then(function (response) {
                    if (!(response.data == '')) {
                        setProduct(response.data.data)
                    } else {
                        setProduct([])
                    }
                })
        } else {
            getProductByCatId(cat_id)
                .then(function (response) {
                    if (!(response.data == '')) {
                        setProduct(response.data.data)
                    } else {
                        setProduct([])
                    }
                })
        }
        setCurrentLang(localStorage.getItem('lang'))
    }, [cat_id])

    const clearFilter = () => {
        setDiameter(null)
        setType(null)
        setFeatures(null)
        setFunctions(null)
        document.querySelectorAll('input[type=radio]').forEach(function(ch){
            ch.checked = false
        })
        
    }

    // const filterList = (e) => {
        
    // }

    // const filterList = (e) => {
    //     if (e.target.checked == false) {
    //         var index = checkfilter.indexOf(e.target.value);
    //         checkfilter.splice(index);
    //         // refreshstate()
    //     } else {
    //         setCheckfilter(checkfilter.concat({
    //             [e.target.name]: e.target.value
    //         }))
    //     }
    // }
    // console.log(checkfilter)


    return (
        <div>
            <Header />
            <div class="container">
                <div class="product_banner">
                    <img src="../images/product_banner_img.png" alt="Galatron Product" />
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
                            <li><NavLink to={'/category/all'}>{CATEGORY_JSON.all}</NavLink></li>
                            {getCategories(categories, currentLang)}
                        </ul>
                    </div>
                    <div class="product_filter">
                        <div class="dropdown">
                            <h4><a>{diameter || CATEGORY_JSON.diameter}</a></h4>
                            <ul>

                                {getFilterData(product, 'diameter').map(function (val, index) {
                                    return (
                                        <li>
                                            <input type="radio" name="diameter" id={'diameter' + index} value={val} onClick={(e) => setDiameter(e.target.value)} />
                                            <label for={'diameter' + index}>{val}</label>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div class="dropdown">
                            <h4><a>{type || CATEGORY_JSON.type}</a></h4>
                            <ul>
                                {getFilterData(product, 'types').map(function (val, index) {
                                    return (
                                        <li><input type="radio" name="types" id={'types' + index} value={val} onClick={(e) => setType(e.target.value)}/> <label for={'types' + index}>{val}</label> </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div class="dropdown">
                            <h4><a>{features || CATEGORY_JSON.features}</a></h4>
                            <ul>
                                {getFilterData(product, 'features').map(function (val, index) {
                                    return (
                                        <li><input type="radio" name="features" id={'features' + index} value={val} onClick={(e) => setFeatures(e.target.value)}/> <label for={'features' + index}>{val}</label> </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div class="dropdown">
                            <h4><a>{functions || CATEGORY_JSON.functions}</a></h4>
                            <ul>
                                {getFilterData(product, 'functions').map(function (val, index) {
                                    return (
                                        <li><input type="radio" name="functions" id={'function' + index} value={val} onClick={(e) => setFunctions(e.target.value)}/> <label for={'function' + index}>{val}</label> </li>
                                    )
                                })}
                            </ul>
                        </div>
                        {diameter == null && type == null && features == null && functions == null? null : <div class="clear_filter"><button onClick={()=>clearFilter()}>{CATEGORY_JSON.clear}</button></div>}
                    </div>
                </div>
            </div>

            <div class="container_fluid">
                <div class="product_area">
                    <ul>
                        {getProductList(product, diameter, type, features, functions)}
                    </ul>
                    {/* <div class="product_page_button">
                        <a href="#">LOAD MORE</a>
                    </div> */}
                </div>
            </div>

            <div class="curve_white">

            </div> 
            <div class="container">            
                <div class="catalog">
                <div class="catalog_img">
                        <img src="../images/download_bg.png" alt="catalog" />                 
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

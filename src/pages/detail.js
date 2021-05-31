import React, { useState, useEffect } from 'react'
import Header from '../components/header/white-header'
import Footer from '../components/footer/footer'
import { getProductById, getProductByCatId } from '../services/api/product.service'
import { addToCart } from '../helpers/cart'
import { useParams } from 'react-router-dom';
import { CURRENCY } from '../constant/currency'
import { DETAIL_JSON } from '../constant/translate'
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decreaseQuanity, increaseQuanity } from '../redux/actions/product.actions';
import { useSelector } from 'react-redux';



function Detail() {

    const [product, setProduct] = useState([])
    const { page_id } = useParams()
    const [relatedData, setRelatedData] = useState([])
    let history = useHistory();
    const dispatchQty = useDispatch();
    const getValue = useSelector((state) => state)
    const [currentPos, setCurrentPos] = useState(0)
    //console.log(getValue)

    const handleScroll = () => {
        const position = parseInt(window.pageYOffset);
        setCurrentPos(position);
    }

    useEffect(() => {
        // Get ALl Categories API Data
        console.log(page_id)
        getProductById(page_id)
            .then((response) => setProduct(response.data.data))
            .catch((error) => alert('Products not Loaded Properly, Please Refresh Page'))

        getProductByCatId('1')
            .then(function (response) {
                if (!(response.data == '')) {
                    setRelatedData(response.data.data)
                } else {
                    setRelatedData([])
                }
            })
        window.addEventListener('scroll', handleScroll, { passive: true })
    }, [])


    const AddtoCart = async (id, qty) => {
        addToCart(id, qty)
        history.push("/cart")
    }

    const options = {
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
    };
    return (
        <div>
            <Header />
            {product.map(function (product) {
                return (
                    <>
                        <div class="container_fluid">
                            <div class="container">
                                <div className={currentPos>300? 'product_name detail_fix' : 'product_name'}>
                                    <h1>{product.title}</h1>
                                
                                    {product.img1 == 'NULL'? <img src='../../images/no_image.jpg' alt={product.title} /> : <img src={product.img1} alt={product.title} /> }
                                </div>
                            </div>
                        </div>

                        <div class="container_fluid">
                            <div class="container">
                                <div class="product_details">
                                    <div class="product_specifications">
                                        <h3>{product.model}</h3>
                                        <p>{DETAIL_JSON.diameter} : {product.diameter}
                                            <span>{DETAIL_JSON.cartridge}: {product.types}</span>
                                            <span>{DETAIL_JSON.cartridge}: {product.functions}</span>
                                            <span>{DETAIL_JSON.cartridge}: {product.features}</span>
                                            </p>
                                        <ul>
                                            {product.technical_sheet == 'NULL'? 
                                            null
                                            : (<li><h5><a href={product.technical_sheet} target="_blank" download><img src="../../images/d_file_icon_1.png" alt="data icon" /><span>{DETAIL_JSON.techsheet}</span></a></h5></li>)
            }
                                            {product.technical_drawing == 'NULL'? 
                                            null
                                            : (<li><h5><a href={product.technical_drawing} target="_blank" download><img src="../../images/design_icon.png" alt="design icon" /><span>{DETAIL_JSON.techdrawing}</span></a></h5></li>)}
                                            <li><h5><a href={product.img1} target="_blank"><img src="../../images/download_image_icon.png" alt="download image icon" /><span>{DETAIL_JSON.downloadimg}</span></a></h5></li>
                                        </ul>
                                    </div>
                                    <div className={currentPos>300? 'product_thumbnail fixed_img' : 'product_thumbnail'}>
                                    {product.img1 == 'NULL'? <img src='../../images/no_image.jpg' alt={product.title} /> : <img src={product.img1} alt={product.title} /> }
                                    </div>
                                    <div class="product_price">
                                        <h3>{CURRENCY} {product.price}</h3>
                                        <p>{DETAIL_JSON.taxincluded}
                                            <span>{DETAIL_JSON.shipping_calculation}</span>
                                            {product.subtitle}
                                            <span>Stock : {product.stock}</span>
                                            </p>
                                        <div class="quantity_button">
                                            <button type="button" onClick={() => dispatchQty(decreaseQuanity(getValue.IncreaseQtyReducer))}>-</button>
                                            <input type="text" value={getValue.IncreaseQtyReducer} />
                                            <button type="button" onClick={() => dispatchQty(increaseQuanity(getValue.IncreaseQtyReducer))}>+</button>
                                        </div>
                                        <div class="addtocart"><button onClick={() => AddtoCart(product.id, getValue.IncreaseQtyReducer)}>{DETAIL_JSON.addtocart}</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="curve_white">

                        </div>

                        <div class="container">
                            <div class="product_slider">
                                <div class="slider_outer">
                                    <h2>{DETAIL_JSON.view}<span>{DETAIL_JSON.other_cartridges}</span></h2>
                                    <div class="slider_details">
                                        {relatedData.map(function (rel) {
                                            return (
                                                <div class="item">
                                                    <ul>
                                                        <li class="slide_img">{rel.img1 == 'NULL'? <img src='../../images/no_image.jpg' alt={rel.title} /> : <img src={rel.img1} alt={rel.title} /> }</li>
                                                        <li><h3>{rel.title}</h3></li>
                                                        <li><h4>{CURRENCY} {rel.price}</h4></li>
                                                    </ul>
                                                </div>
                                            )
                                        })}


                                    </div>
                                </div>
                            </div>
                            <div class="backtoshop"><NavLink to="/category/all">{DETAIL_JSON.backtoshop}</NavLink></div>
                        </div>
                    </>
                )
            })}


            <Footer />

        </div>
    );
}

export default Detail;

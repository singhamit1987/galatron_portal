import React from 'react';
import Home from '../pages/home'
import Download from '../pages/download'
import Contact from '../pages/contact'
import Checkout from '../pages/checkout'
import Checkout_address from '../pages/checkout-address'
import Checkout_payment from '../pages/checkout-payment'
import Company from '../pages/company'
import Failed from '../pages/failed'
import Confirm from '../pages/order-confirm'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Menu from '../components/menu/menu'
import Login from '../pages/login'
import Registration from '../pages/register'
import Account from '../pages/account'
import Addaddress from '../pages/add-address'
import Editaddress from '../pages/edit-address'
import Orderhistory from '../pages/order_history'
import Orderdetails from '../pages/order_details'
import Pagenotfound from '../pages/error_page'
import { Route, BrowserRouter as Router, Switch, Link , NavLink } from 'react-router-dom';
import { AuthGuard } from '../routes/guards/authGuard.guard'
import { MainGuard } from '../routes/guards/mainGaurd.gaurd'
import { LANGUAGE } from '../constant/path'
import Terms from '../pages/terms'
import Privacy from '../pages/privacy'
import Cookiepolicy from '../pages/cookie'
import ScrollToTop from '../helpers/scrolltop'

export default function Mainrouting() {
    return (
        <Router>            
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/download" component={Download} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/cookie" component={Cookiepolicy} />
                    <AuthGuard exact path="/checkout" component={Checkout} />
                    <AuthGuard exact path="/checkout/payment" component={Checkout_payment} />
                    <AuthGuard exact path="/checkout/address" component={Checkout_address} />
                    <Route exact path="/company" component={Company} />
                    <AuthGuard exact path="/failed" component={Failed} />
                    <AuthGuard exact path="/confirm" component={Confirm} />
                    <Route exact path="/category/:cat_id" component={Product} />
                    <Route exact path="/product/:page_slug/:page_id" component={Detail} />
                    <MainGuard exact path="/login" component={Login} />
                    <MainGuard exact path="/register" component={Registration} />
                    <AuthGuard exact path="/account" component={Account} />
                    <AuthGuard exact path="/address" component={Addaddress} />
                    <AuthGuard exact path="/add-address" component={Addaddress} />
                    <AuthGuard exact path="/edit-address" component={Editaddress} />
                    <AuthGuard exact path="/order-history" component={Orderhistory} />
                    <AuthGuard exact path="/order-details/:order_no" component={Orderdetails} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path= "/menu" component ={Menu} />
                    <Route component={Pagenotfound} />
                </Switch>
            </div>
        </Router>
    )
}
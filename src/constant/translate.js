import ACCOUNT from '../lang/en/account.json'
import ADDADDRESS from '../lang/en/add-address.json'
import ADDRESS from '../lang/en/address.json'
import CART from '../lang/en/cart.json'
import CATEGORY from '../lang/en/category.json'
import CHECKOUT from '../lang/en/checkout.json'
import COMPANY from '../lang/en/company.json'
import CONFIRM from '../lang/en/confirm.json'
import CONTACT from '../lang/en/contact.json'
import DETAIL from '../lang/en/detail.json'
import DOWNLOAD from '../lang/en/download.json'
import EDITADDRESS from '../lang/en/edit-address.json'
import FOOTER from '../lang/en/footer.json'
import HEADER from '../lang/en/header.json'
import HOME from '../lang/en/home.json'
import LEFTMENU from '../lang/en/leftmenu.json'
import LOGIN from '../lang/en/login.json'
import MENU from '../lang/en/menu.json'
import ORDERDETAILS from '../lang/en/order_details.json'
import ORDERHISTORY from '../lang/en/order_history.json'
import ORDERCONFIRM from '../lang/en/orderconfirm.json'
import REGISTER from '../lang/en/register.json'
import CONTENT from '../lang/en/content.json'

import ACCOUNT_ES from '../lang/es/account.json'
import ADDADDRESS_ES from '../lang/es/add-address.json'
import ADDRESS_ES from '../lang/es/address.json'
import CART_ES from '../lang/es/cart.json'
import CATEGORY_ES from '../lang/es/category.json'
import CHECKOUT_ES from '../lang/es/checkout.json'
import COMPANY_ES from '../lang/es/company.json'
import CONFIRM_ES from '../lang/es/confirm.json'
import CONTACT_ES from '../lang/es/contact.json'
import DETAIL_ES from '../lang/es/detail.json'
import DOWNLOAD_ES from '../lang/es/download.json'
import EDITADDRESS_ES from '../lang/es/edit-address.json'
import FOOTER_ES from '../lang/es/footer.json'
import HEADER_ES from '../lang/es/header.json'
import HOME_ES from '../lang/es/home.json'
import LEFTMENU_ES from '../lang/es/leftmenu.json'
import LOGIN_ES from '../lang/es/login.json'
import MENU_ES from '../lang/es/menu.json'
import ORDERDETAILS_ES from '../lang/es/order_details.json'
import ORDERHISTORY_ES from '../lang/es/order_history.json'
import ORDERCONFIRM_ES from '../lang/es/orderconfirm.json'
import REGISTER_ES from '../lang/es/register.json'
import CONTENT_ES from '../lang/es/content.json'

import ACCOUNT_CH from '../lang/ch/account.json'
import ADDADDRESS_CH from '../lang/ch/add-address.json'
import ADDRESS_CH from '../lang/ch/address.json'
import CART_CH from '../lang/ch/cart.json'
import CATEGORY_CH from '../lang/ch/category.json'
import CHECKOUT_CH from '../lang/ch/checkout.json'
import COMPANY_CH from '../lang/ch/company.json'
import CONFIRM_CH from '../lang/ch/confirm.json'
import CONTACT_CH from '../lang/ch/contact.json'
import DETAIL_CH from '../lang/ch/detail.json'
import DOWNLOAD_CH from '../lang/ch/download.json'
import EDITADDRESS_CH from '../lang/ch/edit-address.json'
import FOOTER_CH from '../lang/ch/footer.json'
import HEADER_CH from '../lang/ch/header.json'
import HOME_CH from '../lang/ch/home.json'
import LEFTMENU_CH from '../lang/ch/leftmenu.json'
import LOGIN_CH from '../lang/ch/login.json'
import MENU_CH from '../lang/ch/menu.json'
import ORDERDETAILS_CH from '../lang/ch/order_details.json'
import ORDERHISTORY_CH from '../lang/ch/order_history.json'
import ORDERCONFIRM_CH from '../lang/ch/orderconfirm.json'
import REGISTER_CH from '../lang/ch/register.json'
import CONTENT_CH from '../lang/ch/content.json'

import ACCOUNT_IT from '../lang/it/account.json'
import ADDADDRESS_IT from '../lang/it/add-address.json'
import ADDRESS_IT from '../lang/it/address.json'
import CART_IT from '../lang/it/cart.json'
import CATEGORY_IT from '../lang/it/category.json'
import CHECKOUT_IT from '../lang/it/checkout.json'
import COMPANY_IT from '../lang/it/company.json'
import CONFIRM_IT from '../lang/it/confirm.json'
import CONTACT_IT from '../lang/it/contact.json'
import DETAIL_IT from '../lang/it/detail.json'
import DOWNLOAD_IT from '../lang/it/download.json'
import EDITADDRESS_IT from '../lang/it/edit-address.json'
import FOOTER_IT from '../lang/it/footer.json'
import HEADER_IT from '../lang/it/header.json'
import HOME_IT from '../lang/it/home.json'
import LEFTMENU_IT from '../lang/it/leftmenu.json'
import LOGIN_IT from '../lang/it/login.json'
import MENU_IT from '../lang/it/menu.json'
import ORDERDETAILS_IT from '../lang/it/order_details.json'
import ORDERHISTORY_IT from '../lang/it/order_history.json'
import ORDERCONFIRM_IT from '../lang/it/orderconfirm.json'
import REGISTER_IT from '../lang/it/register.json'
import CONTENT_IT from '../lang/it/content.json'
import { getCurrentLanguage } from '../helpers/common'

let HOME_IP, ACCOUNT_IP, ADDADDRESS_IP, ADDRESS_IP, CART_IP, CATEGORY_IP, CHECKOUT_IP, COMPANY_IP, CONFIRM_IP, CONTACT_IP, DETAIL_IP, DOWNLOAD_IP, EDITADDRESS_IP, FOOTER_IP, HEADER_IP, LEFTMENU_IP, LOGIN_IP, MENU_IP, ORDERDETAILS_IP, ORDERHISTORY_IP, ORDERCONFIRM_IP, REGISTER_IP, CONTENT_IP

let CURRENT_LANG = getCurrentLanguage()


switch (CURRENT_LANG) {
    case 'es':
        ACCOUNT_IP = ACCOUNT_ES
        ADDADDRESS_IP = ADDADDRESS_ES
        ADDRESS_IP = ADDRESS_ES
        CART_IP = CART_ES
        CATEGORY_IP = CATEGORY_ES
        CHECKOUT_IP = CHECKOUT_ES
        COMPANY_IP = COMPANY_ES
        CONFIRM_IP = CONFIRM_ES
        CONTACT_IP = CONTACT_ES
        DETAIL_IP = DETAIL_ES
        DOWNLOAD_IP = DOWNLOAD_ES
        EDITADDRESS_IP = EDITADDRESS_ES
        FOOTER_IP = FOOTER_ES
        HEADER_IP = HEADER_ES
        HOME_IP = HOME_ES
        LEFTMENU_IP = LEFTMENU_ES
        LOGIN_IP = LOGIN_ES
        MENU_IP = MENU_ES
        ORDERDETAILS_IP = ORDERDETAILS_ES
        ORDERHISTORY_IP = ORDERHISTORY_ES
        ORDERCONFIRM_IP = ORDERCONFIRM_ES
        REGISTER_IP = REGISTER_ES
        CONTENT_IP = CONTENT_ES
        break
    
    case 'ch':
        ACCOUNT_IP = ACCOUNT_CH
        ADDADDRESS_IP = ADDADDRESS_CH
        ADDRESS_IP = ADDRESS_CH
        CART_IP = CART_CH
        CATEGORY_IP = CATEGORY_CH
        CHECKOUT_IP = CHECKOUT_CH
        COMPANY_IP = COMPANY_CH
        CONFIRM_IP = CONFIRM_CH
        CONTACT_IP = CONTACT_CH
        DETAIL_IP = DETAIL_CH
        DOWNLOAD_IP = DOWNLOAD_CH
        EDITADDRESS_IP = EDITADDRESS_CH
        FOOTER_IP = FOOTER_CH
        HEADER_IP = HEADER_CH
        HOME_IP = HOME_CH
        LEFTMENU_IP = LEFTMENU_CH
        LOGIN_IP = LOGIN_CH
        MENU_IP = MENU_CH
        ORDERDETAILS_IP = ORDERDETAILS_CH
        ORDERHISTORY_IP = ORDERHISTORY_CH
        ORDERCONFIRM_IP = ORDERCONFIRM_CH
        REGISTER_IP = REGISTER_CH
        CONTENT_IP = CONTENT_CH
        break
    
    case 'it':
        ACCOUNT_IP = ACCOUNT_IT
        ADDADDRESS_IP = ADDADDRESS_IT
        ADDRESS_IP = ADDRESS_IT
        CART_IP = CART_IT
        CATEGORY_IP = CATEGORY_IT
        CHECKOUT_IP = CHECKOUT_IT
        COMPANY_IP = COMPANY_IT
        CONFIRM_IP = CONFIRM_IT
        CONTACT_IP = CONTACT_IT
        DETAIL_IP = DETAIL_IT
        DOWNLOAD_IP = DOWNLOAD_IT
        EDITADDRESS_IP = EDITADDRESS_IT
        FOOTER_IP = FOOTER_IT
        HEADER_IP = HEADER_IT
        HOME_IP = HOME_IT
        LEFTMENU_IP = LEFTMENU_IT
        LOGIN_IP = LOGIN_IT
        MENU_IP = MENU_IT
        ORDERDETAILS_IP = ORDERDETAILS_IT
        ORDERHISTORY_IP = ORDERHISTORY_IT
        ORDERCONFIRM_IP = ORDERCONFIRM_IT
        REGISTER_IP = REGISTER_IT
        CONTENT_IP = CONTENT_IT
        break

    default:
        ACCOUNT_IP = ACCOUNT
        ADDADDRESS_IP = ADDADDRESS
        ADDRESS_IP = ADDRESS
        CART_IP = CART
        CATEGORY_IP = CATEGORY
        CHECKOUT_IP = CHECKOUT
        COMPANY_IP = COMPANY
        CONFIRM_IP = CONFIRM
        CONTACT_IP = CONTACT
        DETAIL_IP = DETAIL
        DOWNLOAD_IP = DOWNLOAD
        EDITADDRESS_IP = EDITADDRESS
        FOOTER_IP = FOOTER
        HEADER_IP = HEADER
        HOME_IP = HOME
        LEFTMENU_IP = LEFTMENU
        LOGIN_IP = LOGIN
        MENU_IP = MENU
        ORDERDETAILS_IP = ORDERDETAILS
        ORDERHISTORY_IP = ORDERHISTORY
        ORDERCONFIRM_IP = ORDERCONFIRM
        REGISTER_IP = REGISTER
        CONTENT_IP = CONTENT
}


export const ACCOUNT_JSON = ACCOUNT_IP
export const ADDADDRESS_JSON = ADDADDRESS_IP
export const ADDRESS_JSON = ADDRESS_IP
export const CART_JSON = CART_IP
export const CATEGORY_JSON = CATEGORY_IP
export const CHECKOUT_JSON = CHECKOUT_IP
export const COMPANY_JSON = COMPANY_IP
export const CONFIRM_JSON = CONFIRM_IP
export const CONTACT_JSON = CONTACT_IP
export const DETAIL_JSON = DETAIL_IP
export const DOWNLOAD_JSON = DOWNLOAD_IP
export const EDITADDRESS_JSON = EDITADDRESS_IP
export const FOOTER_JSON = FOOTER_IP
export const HEADER_JSON = HEADER_IP
export const HOME_JSON = HOME_IP
export const LEFTMENU_JSON = LEFTMENU_IP
export const LOGIN_JSON = LOGIN_IP
export const MENU_JSON = MENU_IP
export const ORDERDETAILS_JSON = ORDERDETAILS_IP
export const ORDERHISTORY_JSON = ORDERHISTORY_IP
export const ORDERCONFIRM_JSON = ORDERCONFIRM_IP
export const REGISTER_JSON = REGISTER
export const CONTENT_JSON = CONTENT_IP
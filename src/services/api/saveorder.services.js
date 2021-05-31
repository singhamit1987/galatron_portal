import { fetch } from "../fetch.services";
import { API_PATH } from "../../constant/path"

export const saveOrderData = (customer_id, email, mobile, fname, lname, company, address, address2, city, state, country, zipcode, shipping_fname, shipping_lname, shipping_company, shipping_address, shipping_address2, shipping_city, shipping_state, shipping_country, shipping_zipcode, product=[], shipping_charges, total_price, pay_type, payment_option) => {
  return fetch("get", API_PATH + 'type=saveOrder&customer_id=' + customer_id + '&email=' + email + '&mobile=' + mobile + '&fname=' + fname + '&lname=' + lname + '&company=' + company + '&address=' + address + '&address2=' + address2 + '&city=' + city + '&state=' + state + '&country=' + country + '&zipcode=' + zipcode + '&shipping_fname=' + shipping_fname + '&shipping_lname=' + shipping_lname + '&shipping_company=' + shipping_company + '&shipping_address=' + shipping_address + '&shipping_address2=' + shipping_address2 + '&shipping_city=' + shipping_city + '&shipping_state=' + shipping_state + '&shipping_country=' + shipping_country + '&shipping_zipcode=' + shipping_zipcode + '&product=' + product + '&shipping_charges=' + shipping_charges + '&total_price=' + total_price + '&pay_type=' + pay_type + '&payment_option=' + payment_option, {}, {});
}

export const paymentConfirmation = (id, order_id, status) => {  
  return fetch("get", API_PATH + 'type=paymentResponse&customer_id=' + id + '&order_id=' + order_id + '&payment_status=' + status, {}, {});
}
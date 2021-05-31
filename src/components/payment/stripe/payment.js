import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { CHECKOUT_JSON } from '../../../constant/translate'
import { paymentConfirmation } from '../../../services/api/saveorder.services'

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory()
  
  const handleSubmit = async (event) => {
    // Block native form submission.
    //  event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return (
        <Redirect to="/" />
      );
    }


    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
      card: cardExpiryElement,
      card: cardCvcElement,
    });

 

    if (error) {
      await paymentConfirmation(props.customer_id, props.order_id, 'Awating Authorization')
      .then(function(res){
        history.push('/failed')
      })  
    } else {
      await paymentConfirmation(props.customer_id, props.order_id, 'booked')
      .then(function(res){
        console.log(res)
        if(res.data.status = '200') {
          history.push('/confirm')
        } else {
          history.push('/failed')
        }
      })  
    }
  };

  return (
    <>
      <ul>
        <li><span><label>{CHECKOUT_JSON.card_number}</label></span></li>
        <li><CardNumberElement /></li>
      </ul>
      <ul>
        <li><span><label>{CHECKOUT_JSON.card_exp}</label></span></li>
        <li><CardExpiryElement /></li>
      </ul>
      <ul>
        <li><span><label>{CHECKOUT_JSON.card_cvv}</label></span></li>
        <li><CardCvcElement /></li>
      </ul> 
      <div class="make_payment"><button type="button" onClick={() => handleSubmit()} disabled={!stripe}>{CHECKOUT_JSON.continue}</button></div>
    </>
  );
};
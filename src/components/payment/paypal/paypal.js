import React, { useRef, useEffect } from "react";
import { Redirect, useHistory } from 'react-router';
import { paymentConfirmation } from '../../../services/api/saveorder.services'

export default function Paypal(props) {
    const paypal = useRef();
    const history = useHistory()
    useEffect(() => {

        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: props.order_id,
                                amount: {
                                    currency_code: "EUR",
                                    value: props.total,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    paymentConfirmation(props.customer_id, props.order_id, 'booked')
                        .then(function (res) {
                            console.log(res)
                            if (res.data.status = '200') {
                                history.push('/confirm')
                            } else {
                                history.push('/failed')
                            }
                        })
                    console.log(order);
                },
                onError: (err) => {
                    paymentConfirmation(props.customer_id, props.order_id, 'Awating Authorization')
                        .then(function (res) {
                            history.push('/failed')
                        })
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}
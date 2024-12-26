import React from "react";
import StripePaymentBtn from "./PaymentGateways/stripePayment/StripePaymentBtn";
import PaypalPaymentBtn from "./PaymentGateways/paypal/PaypalPaymentBtn";
import RazorpayPaymentBtn from "./PaymentGateways/razorpay/RazorpayPaymentBtn";

const ItemCard = () => {
  const data = {
    shipping: {
      name: "Satyam Tripathi",
      address: {
        line1: "142 New It Park, ",
        line2: "Electronic Complex Indore",
        state: "MP",
        fullState: "Madhya Pradesh",
        country: "IN",
        pincode: 452010,
      },
      productName: "Campus Active Cell Sports Shoes",
      noOfItems: 1,
    },
    amount: 960,
    currency: "inr",
    description: "Campus Active Cell Sports Shoes",
  };
  return (
    <div className="mt-4">
      <div className="card p-3">
        <div className="card-body d-flex justify-content-center flex-column align-items-start">
          <h5>Shipping details</h5>
          <div className="details card p-2">
            <span className="mt-2">
              Item: <b>{data.shipping.productName}</b>
            </span>
            <span className="mt-2 mb-2">
              Total: <b>Rs {data.amount}</b>
            </span>
          </div>
        </div>
        <StripePaymentBtn data={data} />
        <PaypalPaymentBtn data={data} />
        <RazorpayPaymentBtn data={data} />
      </div>
    </div>
  );
};

export default ItemCard;

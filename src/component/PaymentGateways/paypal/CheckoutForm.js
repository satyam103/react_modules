import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const [{ options }, dispatch] = usePayPalScriptReducer();
  const onCreateOrder = (data, actions) => {
    dispatch({
      value: {
        ...options,
        currency: "USD",
      },
    });
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: data.amount,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      console.log(details, "-------- paypal");
      alert(`Transaction completed by ${name}`);
      navigate("/");
    });
  };
  return (
    <div className="container p-4 d-flex flex-column col-6">
      <h3 className="text-center">Checkout</h3>
      <div className="card p-3 mb-2 ">
        <div className="d-flex">
          <span className="col-4">Shipping Address: </span>
          <div className="details col-8">
            <b>
              <span>{data.shipping.name},</span>
              <br />
              <span>{data.shipping.address.line1}</span>
              <br />
              <span>{data.shipping.address.line2}</span>
              <br />
              <span>
                {data.shipping.address.fullState},{" "}
                {data.shipping.address.pincode}
              </span>
            </b>
          </div>
        </div>
        <div className="d-flex">
          <span className="col-4">Item :</span>
          <b className="col-8">{data.shipping.productName}</b>
        </div>
        <div className="d-flex">
          <span className="mt-2 col-4">Total :</span>
          <b className="col-8">Rs {data.amount}</b>
        </div>
      </div>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => onApproveOrder(data, actions)}
      />
    </div>
  );
};

export default CheckoutForm;

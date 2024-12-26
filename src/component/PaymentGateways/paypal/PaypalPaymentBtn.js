import React from "react";
import { useNavigate } from "react-router-dom";

const PaypalPaymentBtn = ({ data }) => {
  const navigate = useNavigate();
  const handlePayment = async () => {
    try {
      navigate("/paypal-payment", {
        state: { data: data },
      });
    } catch (error) {
      console.log(error, "error while paypal payment");
    }
  };
  return (
    <div className="mt-4">
      <button
        className=" btn btn-primary w-100"
        onClick={() => handlePayment()}
      >
        <h5 className="text-xl mt-2 text-white text-bold w-100 d-flex align-items-center justify-content-center">
          Paypal Payment
        </h5>
      </button>
    </div>
  );
};

export default PaypalPaymentBtn;

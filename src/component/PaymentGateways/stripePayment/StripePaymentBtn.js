import React from "react";
import { useNavigate } from "react-router-dom";
import { localAxios } from "../../axios/api";

const StripePaymentBtn = ({ data }) => {
  const navigate = useNavigate();
  const handlePayment = async () => {
    try {
      const res = await localAxios.post("/create-payment-intent", { data });
      console.log(res);
      if (res.status === 200) {
        navigate("/stripe-payment", {
          state: { clientSecret: res.data.clientSecret, data: data },
        });
      }
    } catch (error) {
      console.log(error, "error while stripe payment");
    }
  };
  return (
    <div className="mt-4">
      <button className="socialLoginFull-lg" onClick={() => handlePayment()}>
        <h5 className="text-xl mt-2 text-white text-bold w-100 d-flex align-items-center justify-content-center">
          Stripe Payment
        </h5>
      </button>
    </div>
  );
};

export default StripePaymentBtn;

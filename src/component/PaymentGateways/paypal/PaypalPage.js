import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const PaypalPage = () => {
  const initialOptions = {
    clientId:
      "Af2u4fRSd0A0a2_k2lU0_sas17-ZnNSejsqd1fGMFy7z5VTqbS8LrjCOb_gMKkNy3vNYl-Vp_r73T_3X",
    currency: "USD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="container">
        <CheckoutForm />
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalPage;

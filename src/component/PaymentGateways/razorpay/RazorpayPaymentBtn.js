import React from "react";
import { localAxios } from "../../axios/api";

const RazorpayPaymentBtn = ({ data }) => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await localAxios.post("/create-payment-razorpay", { data });
    console.log(result);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_xu4PLmX1P6SxfX", // Enter the Key ID generated from the Dashboard
      amount: data.amount,
      currency: currency,
      name: data.shipping.name,
      description: data.description,
      order_id: order_id,
      handler: async function (response) {
        const data1 = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(response);
        console.log(data1);
        alert(`Payment of Rs ${data.amount} is successfull`);
      },
      prefill: {
        name: data.shipping.name,
        email: "satyam.tr@cisinlabs.com",
        contact: "9999999999",
      },
      notes: {
        address: data.shipping.address.line1 + data.shipping.address.line2,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="mt-4">
      <button className="socialLoginFull-lg" onClick={() => displayRazorpay()}>
        <h5 className="text-xl mt-2 text-white text-bold w-100 d-flex align-items-center justify-content-center">
          Razorpay Payment
        </h5>
      </button>
    </div>
  );
};

export default RazorpayPaymentBtn;

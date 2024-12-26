import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    console.log(result, "---------------------");
    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert(`Payment of Rs ${data.amount} has been successfull`);
      } else {
        alert("Something went wrong during payment process! Please try again");
      }
      navigate("/", { state: { paymentConfirmation: result.paymentIntent } });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <div className="details mt-4 mb-2">
          <span>
            Total amount: <b>Rs {data.amount}</b>
          </span>
        </div>
        <button className="btn btn-primary" disabled={!stripe}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

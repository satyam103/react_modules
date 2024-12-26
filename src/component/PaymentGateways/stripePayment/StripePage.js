import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51PutCxRqbDQeOt7UNzwPBhoQouM2lWGxKqr61b4FHdQB9aIXNzRIrBZ1z3mV9YKTZPItZtATXYmmCdRMXGeuJ0Lv00N7SDQzrb"
);

const StripePage = (props) => {
  const location = useLocation();
  console.log(location, "===============");
  const options = {
    // passing the client secret obtained from the serve
    clientSecret: location.state.clientSecret,
    treme: "Stripe",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
export default StripePage;

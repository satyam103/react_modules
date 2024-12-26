import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/style/style.css";
import Header from "./component/Header";
import HomePage from "./screen/HomePage";
import { useEffect } from "react";
import { messaging } from "./firebaseConfig";
import { getToken } from "firebase/messaging";
import StripePage from "./component/PaymentGateways/stripePayment/StripePage";
import PaypalPage from "./component/PaymentGateways/paypal/PaypalPage";
import RazorpayPage from "./component/PaymentGateways/razorpay/RazorpayPage";
import ChatLogin from "./screen/ChatLogin";
import ChatHome from "./screen/ChatHome";

function App() {
  const fcmMessaging = () => {
    // console.log(
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        getToken(messaging, {
          validKey: "TXC81J9iqrX76OfvRbJvZO_ldz9fqvRbUVU9sUmQ6og",
        }).then((currentToken) => {
          if (currentToken) {
            console.log("FCM Token: ", currentToken);
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        });
      }
    });
  };
  useEffect(() => {
    fcmMessaging();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatHome />} />
          <Route path="/chat-login" element={<ChatLogin />} />
          <Route path="/stripe-payment" element={<StripePage />} />
          <Route path="/paypal-payment" element={<PaypalPage />} />
          <Route path="/razorpay-payment" element={<RazorpayPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

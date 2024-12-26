// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHH-ELDWZgHE3I6xezCwy2wG2hqOIp7Qk",
//   authDomain: "quickstart-9ff13.firebaseapp.com",
//   projectId: "quickstart-9ff13",
//   storageBucket: "quickstart-9ff13.appspot.com",
//   messagingSenderId: "990625069892",
//   appId: "1:990625069892:web:41cfc1e54e670460953511",
//   measurementId: "G-M0KQ4XG2C7",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const messaging = getMessaging(app);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDKZzhT49OaDGXYZYmW3SQXLhJQOw6Ub_g",
  authDomain: "chatalong-fcc16.firebaseapp.com",
  databaseURL: "https://chatalong-fcc16-default-rtdb.firebaseio.com",
  projectId: "chatalong-fcc16",
  storageBucket: "chatalong-fcc16.appspot.com",
  messagingSenderId: "317087103968",
  appId: "1:317087103968:web:9b20a3d9387d731b07c985",
  measurementId: "G-NSM2FYTWZL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export default app;

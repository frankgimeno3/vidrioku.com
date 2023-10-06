import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMG4ZCxqfouEVtpaBpZMX2zft93XMkpoM",
  authDomain: "vidrioku.firebaseapp.com",
  projectId: "vidrioku",
  storageBucket: "vidrioku.appspot.com",
  messagingSenderId: "851068508296",
  appId: "1:851068508296:web:81701cd961f40ecf70e73d",
//   measurementId: "G-5BPFC4Y5DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
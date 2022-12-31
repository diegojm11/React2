
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7vtgY49E6Crqahm-rX_0AN9VPWnBIlEs",
  authDomain: "react2-2502d.firebaseapp.com",
  projectId: "react2-2502d",
  storageBucket: "react2-2502d.appspot.com",
  messagingSenderId: "163076668843",
  appId: "1:163076668843:web:7d8dbaee9bdf07eb7f26ee"
};

const app = initializeApp(firebaseConfig);
export const initFirestoreApp = () => {
    return app
}
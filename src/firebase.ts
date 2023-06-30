import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyAT7k38KtIwYdbFJu5ToNG5nX_X7JFilA8",
  authDomain: "push2-84994.firebaseapp.com",
  projectId: "push2-84994",
  storageBucket: "push2-84994.appspot.com",
  messagingSenderId: "572339062105",
  appId: "1:572339062105:web:1eef614567b5cc16e7f848",
  measurementId: "G-EZPW3JSZTK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging();
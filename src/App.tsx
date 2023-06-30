/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import { messaging } from "./firebase";
import "./App.css";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //Generate the token
      const token = await getToken(messaging, {
        vapidKey:
          "BNh4O9N4OvtH4nFvntyesTi-_0AdmSYauszzRQd36ua3zaLIsRf7elu-y1dQhXxcE3NixfNQKitqJ8IwTo9EjaA",
      });
      console.log("Token Generated:", token);
      //send token to your db

      // // ------Server Work----------------------------------------------------------------
      // //Send Custom Message From Server
      // const registrationTokens = [
      //   "YOUR_REGISTRATION_TOKEN_1",
      //   // …
      //   "YOUR_REGISTRATION_TOKEN_N",
      //   "Fetch From Database",
      // ];
      // const message = {
      //   data: {
      //     score: "850",
      //     time: "2:45",
      //   },
      //   token: registrationTokens,
      // };

      // // Send a message to the device corresponding to the provided
      // // registration token.
      // getMessaging()
      //   .send(message)
      //   .then((response) => {
      //     // Response is a message ID string.
      //     console.log("Successfully sent message:", response);
      //   })
      //   .catch((error) => {
      //     console.log("Error sending message:", error);
      //   });
    } else if (permission === "denied") {
      alert("Notifications denied.");
    }
  }
  useEffect(() => {
    // Request User For Notification Permission
    requestPermission();
  }, []);
  return (
    <>
      <div className="App"></div>
    </>
  );
}

export default App;

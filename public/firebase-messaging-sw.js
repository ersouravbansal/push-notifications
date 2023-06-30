importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAT7k38KtIwYdbFJu5ToNG5nX_X7JFilA8",
    authDomain: "push2-84994.firebaseapp.com",
    projectId: "push2-84994",
    storageBucket: "push2-84994.appspot.com",
    messagingSenderId: "572339062105",
    appId: "1:572339062105:web:1eef614567b5cc16e7f848",
    measurementId: "G-EZPW3JSZTK"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
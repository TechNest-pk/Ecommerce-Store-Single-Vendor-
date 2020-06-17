import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC10oZccoBbOfGE7zuNK9UKgP_dUvyipnM",
    authDomain: "ecomerce-store-b9498.firebaseapp.com",
    databaseURL: "https://ecomerce-store-b9498.firebaseio.com",
    projectId: "ecomerce-store-b9498",
    storageBucket: "ecomerce-store-b9498.appspot.com",
    messagingSenderId: "684170667662",
    appId: "1:684170667662:web:0782dde736def240cf4bdf",
    measurementId: "G-DLYX9WXZM3"
};

firebase.initializeApp(firebaseConfig)

export default firebase;
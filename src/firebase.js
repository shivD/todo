import app from 'firebase/app';


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config  = {
    apiKey: "AIzaSyDIpLR2xXHQ7VV7HG6kigXHjvS3eNHCUlM",
    authDomain: "firbasetodoapp.firebaseapp.com",
    databaseURL: "https://firbasetodoapp-default-rtdb.firebaseio.com",
    projectId: "firbasetodoapp",
    storageBucket: "firbasetodoapp.appspot.com",
    messagingSenderId: "153143078328",
    appId: "1:153143078328:web:8518205dc7c29368e2734d",
    measurementId: "G-N1TGRLS2YE"
  };
  // Initialize Firebase
  const Firebase  =  app.initializeApp(config);
   
  export default Firebase;



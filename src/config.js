import Firebase from 'firebase';
let config = {
    apiKey:'AIzaSyDVFn6nh7XcOB3RlkPzA6ou8RObw2bodP8',
    authDomain:'fir-demo-635f7.firebaseapp.com',
    databaseURL:'https://fir-demo-635f7.firebaseio.com/',
    projectId:'fir-demo-635f7',
    storageBucket:'fir-demo-635f7.appspot.com',
    messagingSenderId:'471837215144'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
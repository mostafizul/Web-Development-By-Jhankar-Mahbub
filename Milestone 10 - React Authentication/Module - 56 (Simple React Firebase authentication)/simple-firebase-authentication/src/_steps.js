/* 
Steps to use Firebase

1. create a project on console.firebase.google.com
2. npm install firebase
3. Register Web app in firebase
4. copy firebase init with config from firebase project settings into a firebase.init.js
5. export deafult app
6. import app firebase init.js into your app.js
7. import getAuth from firebase/auth and create auth = getAuth(app)
8. turn on goggle authentication (goggle sign in enable)
9. create goggle provider
10. use signInWithPopup and pass auth and provider
11. handle .then (if successful) and catch error (if error)
*/
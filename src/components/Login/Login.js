import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };
   if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
   }
   const handleGoogleSignIn = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        const {displayName,email} = result.user;
        const signedInUser = {name:displayName,email}
        setLoggedInUser(signedInUser)
        history.replace(from);
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
  });
   }
    return (
        <div>
           <div className="container justify-content-center">
           <h1>Login here</h1> 
           <button onClick={handleGoogleSignIn}>Sign in with Google</button>
           </div>
        </div>
    );
};

export default Login;
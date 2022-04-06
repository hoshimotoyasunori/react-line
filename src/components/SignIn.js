import React from 'react';
import { Button } from "@material-ui/core";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";


function SignIn() {
  function signInWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }
  return (
    <>
      <div className='header login' >
        <h3>Team Chat</h3>
          <Button onClick={signInWithGoogle}>
            Googleでログイン
          </Button>
        </div>
      <div className='main'></div>
    </>
    
  )
}

export default SignIn

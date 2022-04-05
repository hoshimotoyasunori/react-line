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
      <div className='header'></div>
      <div className='main'>
        <Button onClick={signInWithGoogle}>
          Googleでログイン
        </Button>
      </div>
    </>
    
  )
}

export default SignIn

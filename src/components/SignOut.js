import { Button } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase.js';

function SignOut() {
  return (
    <div className='header'>
      <Button style={{color:"white",fontsize:"15px" }} onClick={() => auth.signOut()}>
          サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
    </div>
  )
}

export default SignOut

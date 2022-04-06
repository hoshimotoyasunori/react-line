import { Button } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase.js';

function SignOut() {
  return (
    <div className='header login'>
      <h3>{auth.currentUser.displayName}</h3>
      <Button onClick={() => auth.signOut()}>
          サインアウト
      </Button>
    </div>
  )
}

export default SignOut

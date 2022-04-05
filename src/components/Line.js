import React, { useState ,useEffect } from 'react';
import SignOut from './SignOut';
import { auth, db } from '../firebase.js';
import SendMessage from './SendMessage';


function Line() {
  const [ messages , setMessages ] = useState([]);
  useEffect(() => {
    db.collection('messages')
    .orderBy('created_at')
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  },[]);
  return (
    <div>
      <SignOut />
      <div className='msgs'>
        {messages.map(({id,text,photoURL,uid}) => (
          <div>
            <div
              key={id}
              className={`msg ${ uid === auth.currentUser.uid ? "sent" : "received"} `}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />

    </div>
  )
}

export default Line

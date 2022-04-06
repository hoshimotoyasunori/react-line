import React,{useState} from 'react';
import {db, auth} from '../firebase.js';
import firebase from "firebase/compat/app";
import { Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"

function SendMessage() {
    const [message , setMessage] = useState();
    function sendMessage(e){
        e.preventDefault();
        const {uid, photoURL,displayName} = auth.currentUser;

        db.collection("messages").add({
            text:message,
            photoURL,
            uid,
            displayName,
            created_at:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className='sendMsg'>
                    <Input
                        style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                        placeholder='メッセージを入力してください' 
                        type="text" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
                </div>
            </form>
        </div>
    )
}

export default SendMessage

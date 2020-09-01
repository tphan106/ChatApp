import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core"
import { auth, provider } from './firebase';
function login() {

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => console.log(result))
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <div className="login_text">
                    <h1>Sign in to ChatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    <h1>Sign in with Google</h1>
                </Button>
            </div>
        </div>
    )
}

export default login

import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core"
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider";
function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }) 
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

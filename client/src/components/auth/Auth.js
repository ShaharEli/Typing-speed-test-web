import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Auth.css";

export const Auth = ({ firebase }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        Swal.fire("Failed to sign up", `${error.message}`, "error");
      });
  };
  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        Swal.fire("Failed to sign up", `${error.message}`, "error");
      });
  };
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div>
      <h1 id='sign-in-title'>Sign in</h1>
      <div className='sign-in-buttons'>
        <div id='regular-sign-in'>
          <div>
            Email:
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='signin-input'
              type='text'
            ></input>
          </div>
          <div>
            Password:
            <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='signin-input'
              type='password'
            ></input>
          </div>
          <div id='buttons-auth'>
            <button onClick={signIn}>Sign in</button>
            <button onClick={signUp}>Sign up</button>
          </div>
        </div>
        <div onClick={signInWithGoogle} id='sign-in-google'>
          Sign in With Google
        </div>
        <div onClick={signInWithFacebook} id='sign-in-facebook'>
          Sign in With Facebook
        </div>
      </div>
    </div>
  );
};

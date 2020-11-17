import React from "react";
import "./App.css";
import { Auth } from "./components/auth/Auth";
import Header from "./components/header/Header";
import Test from "./components/Test/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile } from "./components/profile/Profile";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCOUAdAysYjir_1gHm6gCFfiRD3Eo6MUIs",
  authDomain: "first-project-a7807.firebaseapp.com",
  databaseURL: "https://first-project-a7807.firebaseio.com",
  projectId: "first-project-a7807",
  storageBucket: "first-project-a7807.appspot.com",
  messagingSenderId: "385393258145",
  appId: "1:385393258145:web:13d60c56c4dfdb62d40ae0",
  measurementId: "G-WH2M6SW2TK",
});

const auth = firebase.auth();
firebase.analytics();

function App() {
  const [user] = useAuthState(auth);
  return user ? (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <Header />
            <Test />
          </div>
        </Route>
        <Route exact path='/profile'>
          <Profile user={user} firebase={firebase} />
        </Route>
      </Switch>
    </Router>
  ) : (
    <Auth firebase={firebase} />
  );
}

export default App;

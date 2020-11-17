import React, { useEffect } from "react";
import Header from "../header/Header";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Profile.css";
import "firebase/storage";
import "firebase/firestore";

export const Profile = ({ firebase, user }) => {
  const db = firebase.firestore();
  const [file, setFile] = useState("");
  const logOut = () => {
    firebase.auth().signOut();
  };

  const handleUpload = () => {
    if (file !== "") {
      console.log(file);
      const fileName = file.name;
      const uploadTask = firebase.storage().ref(`images/${fileName}`).put(file);
      console.log("storage");
      uploadTask.on(
        "state_changed",
        (snapShot) => {},
        (err) => {
          Swal.fire("error", `${err.message}`, "error");
        },
        () => {
          firebase
            .storage()
            .ref("images")
            .child(fileName)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              console.log(fireBaseUrl);
              db.collection("users").add({
                name: "Ada",
                image: fireBaseUrl,
              });
            });
        }
      );
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className='auth'>
        {user?.displayName ? (
          <div id='welcome-title'>Welcome {user.displayName}</div>
        ) : (
          <div>
            Enter your first name:
            <br />
            <input type='text' />
          </div>
        )}
        <div>
          <input type='file' onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={handleUpload}>upload</button>
        </div>
        <div onClick={logOut} className='logout'>
          Logout
        </div>
      </div>
    </>
  );
};

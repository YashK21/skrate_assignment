import React, { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const onSignInWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user.email);
        setUser(res.user.email);
        // console.log()
      })
      .catch((err) => {
        console.log(err);
      });
    //   const errorcode = err.code;
  };
  onAuthStateChanged(auth, (user) => {
    user ? navigate("/dashboard") : navigate("/");
  });
  return (
    <div>
      <button onClick={onSignInWithGoogle}>Sign in with google</button>
    </div>
  );
};

export default Login;

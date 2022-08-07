import React, { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import Dashboard from "./Dashboard";
import {useNavigate}  from "react-router-dom";
const Login = () => {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
      const navigate = useNavigate()
  const onSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user.email);
        setUser(res.user.email);
        // console.log()
      })
      .catch((err) => (setError(err)));
  };
 onAuthStateChanged(auth,(user)=>{
    user ? navigate("/dashboard") : navigate("/")
 })
  return (
    <div>
      <button onClick={onSignInWithGoogle}>Sign in with google</button>
      {
    user ?
        
        <div>
          <h1>{user}</h1>
          <Dashboard/>
        </div>
        
         :
         <div>
            {error}
            </div>
        }
    </div>
  );
};

export default Login;

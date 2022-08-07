import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import {useNavigate} from "react-router-dom"
const Dashboard = () => {
  const navigate = useNavigate()
  const handlelogout = (e) => {
    e.preventDefault()
    const auth = getAuth()
    signOut(auth).then(()=>{
      navigate("/")
      alert("logout succesfully")
    }).catch((err)=>
    console.log(err))
  }
  return (
    <div>
        hello from Dashboard
        <br/>
        <button onClick={handlelogout}>
          Logout
        </button>
    </div>
  )
}

export default Dashboard
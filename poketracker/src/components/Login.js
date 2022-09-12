import React, { useEffect } from "react";
import "../styles/Login.css"
import { createUI } from "../Firebase";

const Login = () => {

  useEffect(() => {
    createUI()
  }, [])

  return (
    <div id="login">
      <h1 className="text-light">Login</h1>
      <div className="firebase-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  )
}

export default Login
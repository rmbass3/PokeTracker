import React from "react";
import "../styles/Login.css"

const Login = () => {

  // useEffect(() => {
  //   createUI()
  // }, [])

  return (
    <div id="login">
      <h1 className="text-light">Login</h1>
      <div className="firebase-auth-container"></div>
    </div>
  )
}

export default Login
import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle} from "../Firebase"
import "../styles/Login.css"

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleEmailPasswordSignIn = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log("Signing with", email, password)
    logInWithEmailAndPassword(email, password)
  }


  return (
    <div id="login" className="login">
      <Container className="justify-content-center w-50 bg-dark">
        <Form className="text-center">
          <Form.Group className="mb-3 pt-3" controlId="loginEmail">
            <Form.Control type="email" placeholder="Email address" ref={emailRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
          </Form.Group>
          <Button className="mb-3 w-100 py-2" variant="secondary" onClick={handleEmailPasswordSignIn}>
            Login
          </Button>
          <Button className="mb-3 w-100 py-2" variant="primary" onClick={signInWithGoogle}>
            Login with Google
          </Button>
          <p className="text-light mb-1"><Link to="/reset"><u>Forgot password?</u></Link></p>
          <p className="text-light">Don't have an account? <u><Link to="/register">Register</Link></u> here.</p>
        </Form>
      </Container>
    </div>
  )
}

export default Login
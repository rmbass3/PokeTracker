import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../styles/Login.css"

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password)
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
          <Button className="mb-3 w-100 py-2" variant="secondary" onClick={handleSubmit}>
            Login
          </Button>
          <Button className="mb-3 w-100 py-2" variant="primary" onClick={handleSubmit}>
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
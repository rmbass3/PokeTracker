import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
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
    <div id="login" className="mt-5">
      <Container className="justify-content-center align-items-center w-50">
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className="text-light">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" ref={passwordRef}/>
          </Form.Group>
          <Button className="mt-3" variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login
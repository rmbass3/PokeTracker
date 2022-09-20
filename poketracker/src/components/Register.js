import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from "../Firebase"
import "../styles/Register.css"

const Register = () => {

  const navigate = useNavigate()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const secondPasswordRef = useRef()

  const handleRegister = (e) => {
    e.preventDefault()
    const username = usernameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const secondPassword = secondPasswordRef.current.value
    console.log("Registering with", username, email, password, secondPassword)
  }

  return (
    <div id="register" className="register">
      <Container className="justify-content-center w-50 bg-dark">
        <Form className="">
          <Form.Group className="mb-3 pt-3" controlId="regEmail">
            <Form.Label className="text-light">Email*</Form.Label>
            <Form.Control type="email" ref={emailRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regUsername">
            <Form.Label className="text-light">Username</Form.Label>
            <Form.Control className="mb-2" type="text" ref={usernameRef}/>
            <Form.Text muted>
              Your username must be 3-20 characters long.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regPassword">
            <Form.Label className="text-light" >Password*</Form.Label>
            <Form.Control className="mb-2" type="password" ref={passwordRef}/>
            <Form.Text muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regSecondPassword">
            <Form.Label className="text-light" >Confirm Password*</Form.Label>
            <Form.Control className="mb-2" type="password" ref={secondPasswordRef}/>
          </Form.Group>
          <Button className="mb-3 w-100 py-2" variant="secondary" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Register
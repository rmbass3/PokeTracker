import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from "../Firebase"
import "../styles/Register.css"

const Register = () => {

  const [showMessage, setShowMessage] = useState(false)
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    secondPassword: "",
  })
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    console.log("handleChange -> " + e.target.name + " : " + e.target.value)
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const validate = () => {
    console.log("Validate the form")
    
    let errors = {}

    // Check email
    if (!values.email){
      errors.email = "Email address is required."
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid."
    }

    // Check username
    if (values.username.length > 0 && (values.username.length < 3 || values.username.length > 20)){
      errors.username = "Invalid username length."
    }

    // Check password
    if (values.password.length < 8){
      errors.password = "Invalid password length"
    } else if (!/[a-z]/.test(values.password)){
      errors.password = "Your password must contain at least one letter."
    } else if (!/[0-9]/.test(values.password)){
      errors.password = "Your password must contain at least one digit."
    }

    // Check second password
    if (values.password !== values.secondPassword){
      errors.secondPassword = "Passwords do not match."
    }

    setFormErrors(errors)

    return (Object.keys(errors).length === 0)
  }

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }

    if (validate(values)){
      setShowMessage(true)
    } else {
      setShowMessage(false)
    }
  }


  return (
    <div id="register" className="register">
      <Container className="justify-content-center w-50 bg-dark">
        <Alert 
          show={showMessage}
          variant="success"
          onClose={() => setShowMessage(false)}
          dismissible
        >
          <p>Form submitted!</p>
        </Alert>
        <Form onSubmit={handleSubmit} className="register-form">
          <Form.Group className="mb-3 pt-3" controlId="regEmail">
            <Form.Label className="text-light">Email*</Form.Label>
            <Form.Control
              className="mb-2"
              type="email" 
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-warning">
                {formErrors.email}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="regUsername">
            <Form.Label className="text-light">Username</Form.Label>
            <Form.Control 
              className="mb-2" 
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {formErrors.username && (
              <p className="text-warning">
                {formErrors.username}
              </p>
            )}
            <Form.Text muted>
              Your username must be 3-20 characters long.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regPassword">
            <Form.Label className="text-light" >Password*</Form.Label>
            <Form.Control 
              className="mb-2" 
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="text-warning">
                {formErrors.password}
              </p>
            )}
            <Form.Text muted>
              Your password must be at least 8 characters long, and contain letters and numbers.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regSecondPassword">
            <Form.Label className="text-light">Confirm Password*</Form.Label>
            <Form.Control
              className="mb-2" 
              type="password" 
              name="secondPassword"
              value={values.secondPassword}
              onChange={handleChange}
            />
            {formErrors.secondPassword && (
              <p className="text-warning">
                {formErrors.secondPassword}
              </p>
            )}
          </Form.Group>
          <Button 
            className="mb-3 w-100 py-2" 
            variant="secondary" 
            type="submit"
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Register
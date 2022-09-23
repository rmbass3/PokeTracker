import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { auth, sendPasswordReset } from "../Firebase";
import "../styles/Reset.css"

const Reset = () => {

  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const [emailError, setEmailError] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);

  const handleSubmit = async (email) => {
    const serverError = await sendPasswordReset(email)
    if (serverError){
      validateServer(serverError)
    } else {
      setEmailError("")
      navigate("/")
    }
  }

  const validateServer = (serverError) => {
    
    if (serverError === "auth/invalid-email"){
      setEmailError("Invalid email.")
    } else if (serverError === "auth/user-not-found"){
      setEmailError("Email address not found.")
    } else {
      setEmailError("Error during reset.")
    }
  }

  return (
    <div id="reset" className="reset">
      <Container className="justify-content-center w-50 bg-dark">
        <Form className="text-center">
          <Form.Group className="mb-3 pt-3" controlId="resetEmail">
            <Form.Control 
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-warning pt-1">
                {emailError}
              </p>
            )}
          </Form.Group>
          <Button 
            className="mb-3 w-100 py-2" 
            variant="secondary"
            onClick={() => handleSubmit(email)}  
          >
            Send password reset email
          </Button>
          <p className="text-light">Don't have an account? <u><Link to="/register">Register</Link></u> here.</p>
        </Form>
      </Container>
    </div>
  )
}

export default Reset
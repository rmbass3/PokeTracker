import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { logout } from "../Firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navibar.css'



const Navibar = ({searchBar, setSearchBar, setSearch, user}) => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSearch(searchBar)
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  console.log(user.photoURL)


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="ms-1"><Link to="/" className="text-light">PokéTracker</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            {/* <Navbar.Text onClick={handleLogout}><Link to="/login" className="text-light">Logout</Link></Navbar.Text>
            <Navbar.Text href="#about">About</Navbar.Text>
            <Navbar.Text href="#collection">Collection</Navbar.Text>
            <Navbar.Text href="#adv-search">Advanced Search</Navbar.Text> */}
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchBar}
                onChange={e => setSearchBar(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav>
            <FontAwesomeIcon color="#fff" icon={faUser} border/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navibar
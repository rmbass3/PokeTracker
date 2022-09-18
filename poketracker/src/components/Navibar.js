import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { logout } from "../Firebase";
import '../styles/Navibar.css'

const Navibar = ({searchBar, setSearchBar, setSearch, user}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSearch(searchBar)
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand><Link to="/" className="text-light">PokéTracker</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Navbar.Text onClick={logout}><Link to="/" className="text-light">Logout</Link></Navbar.Text>
            <Navbar.Text href="#about">About</Navbar.Text>
            <Navbar.Text href="#collection">Collection</Navbar.Text>
            <Navbar.Text href="#adv-search">Advanced Search</Navbar.Text>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchBar}
              onChange={e => setSearchBar(e.target.value)}
            />
            <Button 
              type="submit"
              variant="outline-secondary"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navibar
import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { logout } from "../Firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
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

  const getUsername = () => {
    return user.displayName ? user.displayName : user.email.slice(0, user.email.indexOf("@"))
  }

  const getProfilePic = () => {
    return (
      <div>
        {user.photoURL ? 
          <div className="pfp-container d-flex">
            <img className="pfp-img me-1" alt="profile" src={user.photoURL} />
            <span className="caret-down-span">
              <FontAwesomeIcon className="text-light" icon={faCaretDown}/>
            </span>
          </div>
        : 
          <div className="default-container d-flex">
            <FontAwesomeIcon className="text-light me-1" icon={faUser} border/>
            <span className="caret-down-span">
              <FontAwesomeIcon className="text-light" icon={faCaretDown}/>
            </span>
          </div>
        }
      </div>
    )
  }
  


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="ms-1"><Link to="/" className="text-light">PokéTracker</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
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
          <Nav className="me-3">
            <NavDropdown
              title={
                <div className="d-flex">
                  {getProfilePic()}
                </div>
              }
              menuVariant="dark"
              drop="down"
            >
              <NavDropdown.Item id="dropdown-username">
                Signed in as <br/><b>{getUsername()}</b>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="dropdown-profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="dropdown-collection">
                Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="dropdown-signout" onClick={handleLogout}>
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navibar
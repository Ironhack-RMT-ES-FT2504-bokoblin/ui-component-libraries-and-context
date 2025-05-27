import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

function MyNavbar() {

  const { isDarkTheme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={isDarkTheme ? "dark" : "light"}>

      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
          <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
          <button onClick={handleToggleTheme}>☀️/🌑</button>
        </Nav>

      </Navbar.Collapse>


    </Navbar>
  )
}

export default MyNavbar

// similar que he trabajado en alguna funcionalidad
console.log("patata")
function miFuncion() {
  /* .... */
}
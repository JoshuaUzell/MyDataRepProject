import './App.css'; //Import css file for styling the page

//Imports React and boostrap into app
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

//Imports navbar functionality into app
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';

//Imports routing into app
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function MyApp() {
  return (
    <div className="MyApp">
      <Router>
        {/* Navbar for application*/}
        <Navbar collapseOnSelect bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ATU CLUBS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <NavDropdown title="Activities" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/games">Games</NavDropdown.Item>
                  <NavDropdown.Item href="/film">Film</NavDropdown.Item>
                  <NavDropdown.Item href="/chess">Chess</NavDropdown.Item>
                  <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/signUp">SignUp</Nav.Link>
                <Nav.Link href="/listOfStudents">List Of Students</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </div>
  );
}

export default MyApp;

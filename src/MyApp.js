import './App.css'; //Import css file for styling the page

//Imports React and boostrap into app
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

//Imports navbar functionality into app
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';

//Import components
import { Homepage } from './components/homepage';
import { Gamepage } from './components/gamepage';
import { Chesspage } from './components/chesspage';
import { Comedypage } from './components/comedypage';
import { Filmpage } from './components/filmpage';
import { SignUp } from './components/signuppage';
import { ListOfStudents } from './components/listofstudents';
import { EditStudent } from './components/editStudent';


//Imports routing into app
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function MyApp() {
  return (
    <div className="App">
      <Router>
        {/* Navbar for application*/}
        <Navbar collapseOnSelect bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">ATU CLUBS</Navbar.Brand>
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
                <Nav.Link href="/listOfStudents">Registered Club Members</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*Used for displaying specific content depending on the path*/}
        <div className="App">
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/games' element={<Gamepage></Gamepage>}></Route>
            <Route path='/film' element={<Filmpage></Filmpage>}></Route>
            <Route path='/chess' element={<Chesspage></Chesspage>}></Route>
            <Route path='/comedy' element={<Comedypage></Comedypage>}></Route>
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path='/listOfStudents' element={<ListOfStudents></ListOfStudents>}></Route>
            <Route path='/editStudent/:id' element={<EditStudent></EditStudent>}></Route>
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default MyApp;

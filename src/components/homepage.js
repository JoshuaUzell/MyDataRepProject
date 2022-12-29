import React from 'react';
import Nav from 'react-bootstrap/Nav';

//Used to display content on the homepage
export class Homepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <h1>Welcome To the ATU Clubs site</h1>
                <img src="https://www.gmit.ie/sites/default/files/styles/traditional_television/public/2022-10/010422-132.jpg?h=895dc4c0&itok=NOK53Rzk"
                    alt="Homepage image" width="700" height="400"></img>
                <br/>
                <br/>
                <p>Please select a club below</p>
                
                {/* REFERENCES:
                1.  https://www.w3schools.com/react/react_css_styling.asp 
                2.  https://stackoverflow.com/questions/47565496/how-can-i-center-a-navbar-in-react-bootstrap
                */}
                <Nav className="justify-content-center" style={{backgroundColor: 'lightblue', border: '1px solid #ccc', margin: '13px'}}>
                    <Nav.Link style={{ color: 'black' }} href="/games">Games</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/film">Film</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/chess">Chess</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/comedy">Comedy</Nav.Link>
                </Nav>
            </div>

        )
    }
}
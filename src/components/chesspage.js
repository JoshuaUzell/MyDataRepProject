import React from 'react';
import Button from 'react-bootstrap/Button';

//Used to display content on the chesspage
export class Chesspage extends React.Component {
    render() {
        return (
            <div className='chesspage'>
                <h1>Chess Society</h1>
                <img src="https://www.thesprucecrafts.com/thmb/SQLuChpeD-Mxmd9uOVWJZbIf7Co=/2119x1415/filters:fill(auto,1)/GettyImages-918789286-24ee5f320f524f26b9adcb9e895b0600.jpg"
                    alt="Chess image" width="700" height="400"></img>
                <br/>
                <br/>
                <h3>Welcome to Chess Society</h3>
                <p>Here at Chess Society, we have one goal in mind. 
                    That goal, is to have fun! We are a very inclusive society 
                    and would love to have you on board!
                    Please click the sign up button below to get started now!</p>
                {/* REFERENCES: https://react-bootstrap.netlify.app/components/buttons/ */}
                <Button href='/signUp' size="lg" variant="outline-primary">Sign Up</Button>
                {/* The <br> tag creates a break line to space out the content on the page*/}
                <br/> 
                <br/>
            </div>

        )
    }
}
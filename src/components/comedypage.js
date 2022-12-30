import React from 'react';
import Button from 'react-bootstrap/Button';

//Used to display content on the comedypage
export class Comedypage extends React.Component {
    render() {
        return (
            <div className='comedypage'>
                <h1>Comedy Society</h1>
                <img src="https://discovermohican.com/wp-content/uploads/2019/06/Landolls-Comedy-Show.jpg"
                    alt="Comedy image" width="700" height="400"></img>
                <br/>
                <br/>
                <h3>Welcome to Comedy Society</h3>
                <p>Here at Comedy Society, we have one goal in mind. 
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
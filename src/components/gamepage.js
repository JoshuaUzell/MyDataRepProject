import React from 'react';
import Button from 'react-bootstrap/Button';

//Used to display content on the homepage
export class Gamepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <h1>Games Society</h1>
                <img src="https://vignette.wikia.nocookie.net/game-society-pimps/images/1/1c/Game_society_wall.jpg/revision/latest?cb=20180313214508"
                    alt="Game image" width="700" height="400"></img>
                <br/>
                <br/>
                <h3>Welcome to Games Society</h3>
                <p>Here at Games Society, we have one goal in mind. 
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
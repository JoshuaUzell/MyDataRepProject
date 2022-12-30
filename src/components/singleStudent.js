import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"; //Imports bootstrap button
import axios from "axios"; //Imports a promise

export class SingleStudent extends React.Component {

    //Constructor for the SingleStudent class
    constructor() {
        super(); //Calls parents constructor
        this.deleteStudent = this.deleteStudent.bind(this); //Creates a binding for the event method delete
    }

    //This is a delete method that acts as a event
    deleteStudent(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/student/' + this.props.student._id) // Makes request to server and waits for database to delete student with given id
            .then((res) => { this.props.Reload(); }) //If successful, call Reload which refreshes data on the page
            .catch();
    }

    render() {
        return (
            <div>

                {/*Creates a new Card that contains details about the particular student*/}
                <Card>
                    <Card.Header>{this.props.student.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer >
                                {this.props.student.course}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/editStudent/' + this.props.student._id} className="btn btn-primary">Edit Student</Link> {/**Creates a new Edit button Link that sends user to editStudent page upon clicking it*/}
                    <Button variant="danger" onClick={this.deleteStudent}>Delete Student</Button> {/*Creates a delete button, when its clicked, what event should be called?*/}
                </Card>
            </div>
        );
    }
}
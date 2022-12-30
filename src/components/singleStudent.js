import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"; //Imports bootstrap button
import axios from "axios"; //Imports a promise

export class SingleStudent extends React.Component {

    //Constructor for the SingleStudent class
    constructor() {
        super(); //Calls parents constructor
        this.deleteStudent = this.deleteStudent.bind(this); //Creates a binding for the event method deleteStudent
    }

    //An event method that is used for deleting a student
    deleteStudent(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/student/' + this.props.student._id) // Makes request to server and waits for database to delete student with given id
            .then((response) => { this.props.Reload(); }) //If successful, call Reload which refreshes data on the page
            .catch();
    }

    //Displays a single student's details
    render() {
        return (
            <div>
                {/*Creates a new Card that contains details about a particular student*/}
                <Card>
                    <Card.Header>Name: {this.props.student.name}</Card.Header>
                    <Card.Body>Age: {this.props.student.age}</Card.Body>
                    <Card.Body>Email: {this.props.student.email}</Card.Body>
                    <Card.Body>Course: {this.props.student.course}</Card.Body>
                    <Card.Body>Year: {this.props.student.year}</Card.Body>
                    <Link to={'/editStudent/' + this.props.student._id} className="btn btn-primary">Edit Student</Link> {/**Sends the user to the editStudent page upon clicking the edit student button*/}
                    <Button variant="danger" onClick={this.deleteStudent}>Delete Student</Button> {/*When the delete student button is clicked, the associated student will get deleted*/}
                </Card>
                <br />
                <br />
            </div>
        );
    }
}
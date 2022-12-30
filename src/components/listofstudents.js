import React from "react";
import { Students } from "./students";
import axios from "axios";

export class ListOfStudents extends React.Component {

    //Constructor for ListOfStudents class
    constructor(){
        super(); //Call parents constructor
        this.Reload = this.Reload.bind(this); //Creates binding for Reload
    }

    //Refreshes data of students
    Reload() {
        this.componentDidMount();
    }

    //Acts as a lifecycle hook for the start of a component
    //Sends a get request to the server and gets back a list of students
    //Updates students object with the resulting data
    componentDidMount() {
        axios.get('http://localhost:4000/api/students')
            .then((result) => {
                this.setState({ students: result.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //A state object that stores an array of students
    state = {
        students: []
    }

    //Displays the list of students
    render() {
        return (
            <div>
                <h3>Registered Club Members</h3>
                <Students students={this.state.students} Reload={this.Reload}></Students>
            </div>
        );
    }
}
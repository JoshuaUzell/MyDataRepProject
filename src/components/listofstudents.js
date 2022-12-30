import React from "react";
import { Students } from "./students";
import axios from "axios";

export class ListOfStudents extends React.Component {

    //Creates constructor for class
    constructor(){
        super(); //Call parents constructor
        this.Reload = this.Reload.bind(this); //Creates binding for Reload
    }
    //Go off to server and pull new list of students
    //Refreshes data of students - this acts as a event
    Reload() {
        this.componentDidMount();
    }

    //Acts as a lifecycle hook for the start of a component
    componentDidMount() {
        axios.get('http://localhost:4000/api/students')
            .then((response) => {
                this.setState({ students: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        students: []
    }

    render() {
        return (
            <div>
                <h3>List of Students</h3>
                <Students students={this.state.students} Reload={this.Reload}></Students>
            </div>
        );
    }
}
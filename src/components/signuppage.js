import React from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'; //Imports an alert

export class SignUp extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentCourse = this.onChangeStudentCourse.bind(this);
        this.onChangeStudentYear = this.onChangeStudentYear.bind(this);

        this.state = {
            name: '',
            age: '',
            email: '',
            course: '',
            year: ''
        }
    }


    handleSubmit(event) {

        // Check if any of the form fields are empty
        if (this.state.name === '' || this.state.age === ''
            || this.state.email === '' || this.state.course === ''
            || this.state.year === '') {
            // If any of the fields are empty, show an error message
            alert("Failed to Sign Up. Make sure all fields are not empty")
            return;
        }

        event.preventDefault();
        console.log(`Button clicked 
        ${this.state.name},
        ${this.state.age},
        ${this.state.email},
        ${this.state.course},
        ${this.state.year},
        `);

        const student = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            course: this.state.course,
            year: this.state.year,
        }

        axios.post('http://localhost:4000/api/students', student)
            .then()
            .catch();

        this.setState({
            name: '',
            age: '',
            email: '',
            course: '',
            year: '',
        })
    }

    onChangeStudentName(event) {
        this.setState({
            name: event.target.value
        })
    }

    onChangeStudentAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    onChangeStudentEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onChangeStudentCourse(event) {
        this.setState({
            course: event.target.value
        })
    }

    onChangeStudentYear(event) {
        this.setState({
            year: event.target.value
        })
    }

 


    //Display form
    render() {
        return (
            <div>
                <h3>Please enter your details</h3>


                <form onSubmit={this.handleSubmit}>

                    {/* Name */}
                    <div className="form-group">
                        <label>Student Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeStudentName}
                        />
                    </div>

                    {/* Age */}
                    <div className="form-group">
                        <label>Student Age: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeStudentAge}
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Student Email: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeStudentEmail}
                        />
                    </div>

                    {/* Course */}
                    <div className="form-group">
                        <label>Student Course: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.course}
                            onChange={this.onChangeStudentCourse}
                        />
                    </div>

                    {/* Year */}
                    <div className="form-group">
                        <label>Student Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeStudentYear}
                        />
                    </div>
                    <br />
                    <input className="btn btn-outline-primary btn-lg" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
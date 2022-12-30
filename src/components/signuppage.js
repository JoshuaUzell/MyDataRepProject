import React from "react";
import axios from "axios";

export class SignUp extends React.Component {

    //Classes constructor binds event handlers to the component as well as 
    //setting up the components state
    constructor() {
        super();
        this.dealWithSubmit = this.dealWithSubmit.bind(this);
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

    //Sends a post request to the server to create a new student with the data entered in the form.
    //Also checks for any empty fields in the form and if there is, an alert is sent to the user
    dealWithSubmit(event) {
        if (this.state.name === '' || this.state.age === ''
            || this.state.email === '' || this.state.course === ''
            || this.state.year === '') {
            alert("Failed to Sign Up. Make sure all fields are not empty")
            return;
        }

        event.preventDefault();
        console.log(`Button has been clicked
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

    //The set of methods below  
    //update the state of the component with the value
    //of an input element in the component's form.
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

    //Displays the form
    render() {
        return (
            <div>
                <h3>Please complete the form below</h3>
                <br/>
                <form onSubmit={this.dealWithSubmit}>

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
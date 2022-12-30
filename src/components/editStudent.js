import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function EditStudent(props) {

    //A hook that allows access to parameters in a URL, in this case the id of a student
    let { id } = useParams();

    //A set of hooks that each store a value of a form field
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [year, setYear] = useState('');

    //Used to redirect the user back to a different page
    const navigate = useNavigate();

    //A hook that makes an API call to the backend server to retrieve
    //student data when the component is rendered.
    useEffect(() => {
        axios.get('http://localhost:4000/api/student/' + id)
            .then((response) => {
                setName(response.data.name)
                setAge(response.data.age)
                setEmail(response.data.email)
                setCourse(response.data.course)
                setYear(response.data.year)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    //Upon submitting a form, it checks if values in the fields are valid as well as updating student info
    const dealWithSubmit = (event) => {
        event.preventDefault();

        if (name === '' || age === ''
            || email === '' || course === ''
            || year === '') {
            alert("Failed to Update Student. Make sure all fields are not empty")
            return;
        }

        const newStudent = {
            id: id,
            name: name,
            age: age,
            email: email,
            course: course,
            year: year,
        };

        axios.put('http://localhost:4000/api/student/' + id, newStudent)
            .then((res) => {
                console.log(res.data);
                navigate('/listOfStudents');
            });
    }

    //Displays the edit student form to the user
    return (
        <div>
            <h2>Please edit student details</h2>
            <br/>
            <form onSubmit={dealWithSubmit}>

                {/* Name */}
                <div className="form-group">
                    <label>Student Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Age */}
                <div className="form-group">
                    <label>Student Age: </label>
                    <input type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Student Email: </label>
                    <input type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Course */}
                <div className="form-group">
                    <label>Student Course: </label>
                    <input type="text"
                        className="form-control"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>

                {/* Year */}
                <div className="form-group">
                    <label>Student Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Edit Student" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

}
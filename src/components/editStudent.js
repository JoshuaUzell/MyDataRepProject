import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function EditStudent(props) {

    /**The useParams hook returns an object of key/value pairs of
     * the dynamic params from the current URL that were matched by
     * the <Route path>
     */
    let { id } = useParams();

    /**update arrays using the React useState()
     * and without the Array object's push() method
     */

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [year, setYear] = useState('');


    //useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    //useEffect Hook which is similar to componentDidMount
    useEffect(() => {
        /**axios is a promised based web client
         * make a  HTTP Request with GET method and pass as part of the 
         * URL
         */
        axios.get('http://localhost:4000/api/student/' + id)
            .then((response) => {
                //Assign Response data to the arrays using useState
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

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if any of the form fields are empty
        if (name === '' || age === ''
            || email === '' || course === ''
            || year === '') {
            // If any of the fields are empty, show an error message
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

    return (
        <div>
            <h2>Edit Component</h2>
            <form onSubmit={handleSubmit}>

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
                <div className="form-group">
                    <input type="submit" value="Edit Student" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

}
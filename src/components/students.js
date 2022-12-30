import React from "react";
import { SingleStudent } from "./singleStudent";

export class Students extends React.Component {
    render() { //Take a collection of students, split them into individual students and return a single student
        return this.props.students.map(
            (student) => {
                return <SingleStudent student={student} key={student._id} Reload={this.props.Reload}></SingleStudent>
            }
        );
    }
}
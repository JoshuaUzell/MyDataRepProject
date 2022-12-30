import React from "react";
import { SingleStudent } from "./singleStudent";

export class Students extends React.Component{
    render(){ //Take collection of students, split into individual students and return student
        return this.props.students.map(
            (student)=>{
                return <SingleStudent student={student} key={student._id} Reload = {this.props.Reload}></SingleStudent>
            }
        );
    }
}
import React, { Component } from 'react';

function CourseInfo(props) {
    return ( 
        <div>
            <h1>Course Information:</h1>
            <p> Docent: {props.teacher}</p>
            <p> Vak: {props.topic}</p>
            <p> Campus: {props.campus}</p>
        </div>
     );
}


class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: "Florian Smeyers",
            topic: 'React',
            start: '04/02/2022',
            campus: 'Campus Geel'

        }
    }
    
    render() { 
        return ( 
            <div>
                <CourseInfo 
                    teacher = {this.state.teacher}
                    topic = {this.state.topic}
                    campus = {this.state.campus}
                />
                <div>MAP HERE</div>
            </div>
         );
    }
}
 
export default Course;
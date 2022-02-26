import React, { Component } from 'react';
import StudentForm from './StudentForm'
import './Student.css'


function StudentOverview(props) {
    return (  
        <div className='card-row'>
            {props.list.map((student) =>(
                <StudentCard student= {student}/>
            ))}  
        </div>  
    );
}

const StudentCard = (props) => {
    return (  
        
        <div className='card'>
            <img style={{backgroundImage:`linear-gradient(${props.student.color1},${props.student.color2})`}} src={props.student.thumb}/>
            <h3>{props.student.name}  - <span>{props.student.grade}</span></h3>
        </div>
        
    );
}
 

class Students extends Component
 {
    constructor(props){
        super(props)
        this.state = {
            students: [
                {id: 1, name: 'John Doe', grade: 'NaN', thumb:'./images/placeholder-person.png', color1:"#2AAA8A", color2:"#4169E1"},
                {id: 2, name: 'Jane Doe', grade: 'NaN', thumb:'./images/placeholder-person.png', color1:"#2AAA8A", color2:"#4169E1" },
                {id: 3, name: 'John Doe 2', grade: 'NaN', thumb:'./images/placeholder-person.png', color1:"#2AAA8A", color2:"#4169E1" },
                {id: 4, name: 'Jane Doe 2', grade: 'NaN', thumb:'./images/placeholder-person.png', color1:"#2AAA8A", color2:"#4169E1" },
                {id: 5, name: 'John Doe 3', grade: 'NaN', thumb:'./images/placeholder-person.png', color1:"#2AAA8A", color2:"#4169E1" },
            ],
            input: '',
            isGraded: false
        }

        this.handlePassStudent = this.handlePassStudent.bind(this);
        this.handleFailStudent = this.handleFailStudent.bind(this);
    }

    handlePassStudent(id, name, email){
        this.setState((currentState) => {
            const student = currentState.students.find((student) => student.id === id)
            return{
                students: currentState.students.filter((student) =>student.id !== id)
                    .concat([{
                        id, name, email, 
                        passed: true
                    }]),
                isGraded: true
            }
        })
    }

    handleFailStudent(id, name, email){
        this.setState((currentState) => {
            const student = currentState.students.find((student) => student.id === id)
            return{
                students: currentState.students.filter((student) =>student.id !== id)
                    .concat([{
                        id, name, email, 
                        passed: false
                    }]),
                isGraded: true
            }
        })

    }

    render() { 
        return (
            <div>
                <h2 className='block-title'>Studenten</h2>
                <div className='form-area'>
                    <StudentForm list = {this.state.students}/>
                </div>
                <div>
                    <StudentOverview 
                        list = {this.state.students}
                    />
                </div>
                
            </div>
        );
    }
}
 
export default Students;
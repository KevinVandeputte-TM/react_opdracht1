import React, { Component } from 'react';
import StudentForm from './StudentForm'
import './Student.css'


const StudentOverview = (props) => {
    return (  
        <div className='card-row'>
            {props.list.map((student) =>(
                <StudentCard student= {student}
                        key={student.id}
                />
            ))}  
        </div>  
    );
}

const StudentCard = (props) => {
    return (  
        
        <div className='card'>
            <img style={{backgroundImage:`linear-gradient(${props.student.color1},${props.student.color2})`}} src={props.student.thumb}/>
            <h3><span>{props.student.name}</span><span>{props.student.grade}</span></h3>
        </div>
        
    );
}
 

class Students extends Component
 {
    constructor(props){
        super(props)
        this.state = {
            students: [
                {id: 1, name: 'John Doe', grade: '', thumb:'./images/placeholder-person.png', color1:"#009cab", color2:"#f04c25"},
                {id: 2, name: 'Jane Doe', grade: '', thumb:'./images/placeholder-person.png', color1:"#009cab", color2:"#f04c25" },
                {id: 3, name: 'John Doe 2', grade: '', thumb:'./images/placeholder-person.png', color1:"#009cab", color2:"#f04c25" },
                {id: 4, name: 'Jane Doe 2', grade: '', thumb:'./images/placeholder-person.png', color1:"#009cab", color2:"#f04c25"},
                {id: 5, name: 'John Doe 3', grade: '', thumb:'./images/placeholder-person.png', color1:"#009cab", color2:"#f04c25" },
            ]
        }

        this.adjustScoreStudent = this.adjustScoreStudent.bind(this)
    }

    adjustScoreStudent(id, score){

        const selectedstudent = this.state.students.filter((student) => student.id === parseInt(id))
        const grade = score * 5;
        
        if (score >= 10) {
            selectedstudent[0].color1 = "#009cab"
            selectedstudent[0].color2 = "#009cab"
        } else{
            selectedstudent[0].color1 = "#f04c25"
            selectedstudent[0].color2 = "#f04c25"
        }
        
        selectedstudent[0].grade = grade
        console.log('SELECTED STUDENT:', id, selectedstudent);

        this.setState((currentState) => {
            return{
                students: currentState.students.filter((student) => student.id !== parseInt(id))
                        .concat(selectedstudent)
            }
        });

    
    }

    render() { 
        return (
            <div>
                <h2 className='block-title'>Studenten</h2>
                <div className='form-area'>
                    <StudentForm list = {this.state.students.sort((a,b) => a.name > b.name ? 1 : -1).filter((student) => student.grade === '')}
                                onScoreStudent={this.adjustScoreStudent}
                    />
                </div>
                <div>
                    <StudentOverview 
                        list = {this.state.students.sort((a,b) => a.name > b.name ? 1 : -1)}
                    />
                </div>
                
            </div>
        );
    }
}
 
export default Students;
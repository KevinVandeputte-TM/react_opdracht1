import React, { Children, Component } from 'react';
import StudentForm from './StudentForm'
import './Student.css'


const StudentOverview = (props) => {
    return (  
        <div className='card-row'>
            {props.list.map((student) =>(
                <StudentCard student= {student}
                        key={student.id}
                        onAdjustGrade={props.onAdjustGrade}
                        onClearGrade={props.onClearGrade}
                />
            ))}  
        </div>  
    );
}

const StudentCard = (props) => {
    return (  
        <div className='card'>
            <img style={{backgroundImage:`linear-gradient(${props.student.color1},${props.student.color2})`}} src={props.student.thumb}/>
            <h3>{props.student.name}</h3>
            <div style={{width: '100%'}}>
                <hr />
                <div className='point-area'>
                    <span className='grades'>{props.student.grade}</span>/20
                </div>
                <div className='control-area'>  
                    <button className="ctrl-btn" onClick={() => props.onAdjustGrade(props.student.id, '-')}>-</button>
                    <button className='ctrl-btn-clear' onClick={() => props.onClearGrade(props.student.id)}>c</button>
                    <button className='ctrl-btn' onClick={() => props.onAdjustGrade(props.student.id, '+')}>+</button>
                </div>
            </div>
        </div>
        
    );
}
 

class Students extends Component
 {
    constructor(props){
        super(props)
        this.state = {
            students: [
                {id: 1, name: 'John Doe', grade: '', thumb:'./images/eagle.png', color1:"#009cab", color2:"#f04c25"},
                {id: 2, name: 'Jane Doe', grade: '', thumb:'./images/hippo.png', color1:"#009cab", color2:"#f04c25" },
                {id: 3, name: 'John Doe 2', grade: '', thumb:'./images/monkey.png', color1:"#009cab", color2:"#f04c25" },
                {id: 4, name: 'Jane Doe 2', grade: '', thumb:'./images/wolf.png', color1:"#009cab", color2:"#f04c25"},
                {id: 5, name: 'John Doe 3', grade: '', thumb:'./images/rhino.png', color1:"#009cab", color2:"#f04c25" },
            ]
        }

        this.adjustScoreStudent = this.adjustScoreStudent.bind(this)
        this.handleAdjustGrade = this.handleAdjustGrade.bind(this)
        this.handleClearGrade = this.handleClearGrade.bind(this)
    }

    adjustScoreStudent(id, score){

        const selectedstudent = this.state.students.filter((student) => student.id === parseInt(id))

        const grade = score * 5;
        selectedstudent[0].color1 = "#009cab, "+grade+'% ';
        selectedstudent[0].grade = score

        this.setState((currentState) => {
            return{
                students: currentState.students.filter((student) => student.id !== parseInt(id))
                        .concat(selectedstudent)
            }
        });
    }

    handleAdjustGrade(id, operator){

        const selectedstudent = this.state.students.filter((student) => student.id === parseInt(id))

        var currentGrade = selectedstudent[0].grade
        if (currentGrade === ''){
            var currentGrade = 0
        } else {
            currentGrade = parseFloat(currentGrade)
        }

        if(operator === '+'){
            var score = currentGrade + 0.1
        } else {
            var score = currentGrade - 0.1
        }

        if (score > 20) {
            score = 20
        } else if( score < 0){
            score = 0
        }

        // ROUND SCORE
        score = Math.round((score + Number.EPSILON) *100)/100;
        
        //Adjust state
        this.adjustScoreStudent(id, score)
    }

    handleClearGrade(id){
        const selectedstudent = this.state.students.filter((student) => student.id === parseInt(id))
        selectedstudent[0].color1 = "#009cab";
        selectedstudent[0].grade = ''

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
                
                <div className='form-area'>
                    <StudentForm list = {this.state.students.sort((a,b) => a.name > b.name ? 1 : -1)}
                                onScoreStudent={this.adjustScoreStudent}
                    />
                </div>
                <div>
                    <StudentOverview 
                        list = {this.state.students.sort((a,b) => a.name > b.name ? 1 : -1)}
                        onAdjustGrade={this.handleAdjustGrade}
                        onClearGrade={this.handleClearGrade}
                    />
                </div>
                
            </div>
        );
    }
}
 
export default Students;
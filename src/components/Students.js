import React, { Children, Component } from 'react';
import StudentForm from './StudentForm'
import './Student.css'


const StudentOverview = (props) => {
    return (  
        <div className='card-row'>
            {props.list.map((student) =>(
                <StudentCard student= {student}
                        key={student.id}
                        adjustGrade={props.adjustGrade}
                        clearGrade={props.clearGrade}
                        courseClosed={props.courseClosed}
                />
            ))}  
        </div>  
    );
}

const StudentCard = (props) => {

    if (props.courseClosed){
        return(
            <div className='card'>
            <img style={{backgroundImage:`linear-gradient(${props.student.color1},${props.student.color2})`}} src={props.student.thumb}/>
            <h3>{props.student.name}</h3>
            <div style={{width: '100%'}}>
                <hr />
                <div className='point-area'>
                    <span className='grades'>{props.student.grade}</span>/20
                </div>
            </div>
        </div>
        )
    } else {
        return (  
            <div className='card'>
                <img style={{backgroundImage:`linear-gradient(${props.student.color1},${props.student.color2})`}} src={props.student.thumb}/>
                <h3>{props.student.name}</h3>
                <div style={{width: '100%'}}>
                    <hr />
                    <div className='point-area'>
                        <span className='grades'>{props.student.grade}</span>/20
                    </div>
                    <CardControls 
                        onAdjustGrade={props.adjustGrade}
                        onClearGrade={props.clearGrade}
                        student = {props.student.id}
                    />
                </div>
            </div>
            
        );
    }
}

const CardControls = (props) => {
    return (
        <div className='control-area'>  
            <button className="ctrl-btn" onClick={() => props.onAdjustGrade(props.student, '-')}>-</button>
            <button className='ctrl-btn-clear' onClick={() => props.onClearGrade(props.student)}>c</button>
            <button className='ctrl-btn' onClick={() => props.onAdjustGrade(props.student, '+')}>+</button>
        </div> 
     );
}

const Students = (props) => {

    return ( 
        <div>                
            <div className='form-area'>
                <StudentForm list = {props.students.sort((a,b) => a.name > b.name ? 1 : -1)}
                    onScoreStudent={props.scoreStudent}
                    courseClosed={props.courseClosed}                             
                />
            </div>
            <div>
                <StudentOverview 
                    list = {props.students.sort((a,b) => a.name > b.name ? 1 : -1)}
                    adjustGrade={props.adjustGrade}
                    clearGrade={props.clearGrade}
                    courseClosed={props.courseClosed}
                />
            </div>                
        </div>
     );
}
 
export default Students;
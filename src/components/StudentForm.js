import React, { useState } from 'react';
import './Student.css'

const StudentForm = (props) => {

    const [studentID, setStudentID] = useState(0);
    const [score, setScore] = useState('')

    const listChange = (e) =>{
        setStudentID(e.target.value)
    }

    const scoreChange = (e) => {
        setScore(e.target.value)
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onScoreStudent(studentID , score);
        setStudentID(0)
        setScore('')
    }

    
    return ( 
        <form className='formulier' onSubmit={ (e) => handleSubmit(e)}>
            <div className='row'>
                <div className='form-group'>
                    <label>
                        Student:
                        <select className='form-control'
                            value={studentID} onChange={(e) => listChange(e)}>
                                <option> -- Kies Student --</option>
                                {props.list.map((student) => (
                                    <option key={student.id} value={student.id}>
                                        {student.name}
                                    </option>
                                ))}
                        </select>
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        Punten:
                        <input className='form-control' type="number" placeholder='Punten op 20' min='0' max='20' step='0.1' onChange={(e) => scoreChange(e)} 
                                value={score}
                        />
                    </label>
                </div>
            </div>
            <div>
                <input className='btn' type="submit" value="Geef punten in" />
            </div>
        </form>
     );
}
  
export default StudentForm;
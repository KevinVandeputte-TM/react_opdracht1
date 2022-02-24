import React, { Component } from 'react';
import StudentForm from './StudentForm'



function StudentOverview(props) {
    return (  
        <div>
            <h2>Te beoordelen studenten</h2>
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Emailadress</th>
                        <th>Scores</th>
                        <th>Acties</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((student) =>(
                        <tr key={student.id}> 
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                {student.scores}
                            </td>
                            <td>
                                
                                <button onClick={() => props.onPassStudent(student.id, student.name, student.email)}>Student Geslaagd</button>
                                <button onClick={() => props.onFailStudent(student.id, student.name, student.email)}>Student Gebuisd</button>
                            </td>
                        </tr>
                ))}  
                </tbody>
            </table>
        </div> 
    );
}

function PassedStudents(props) {
    return ( 
        <div>
            <h2>Geslaagde studenten</h2>
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Emailadress</th>
                        <th>Acties</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((student) =>(
                        <tr key={student.id}> 
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                TODO
                            </td>
                        </tr>
                ))}  
                </tbody>
            </table>
        </div>
     );
}

function FailedStudents(props) {
    return ( 
        <div>
            <h2>Gebuisde studenten</h2>
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Emailadress</th>
                        <th>Acties</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((student) =>(
                        <tr key={student.id}> 
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                TODO
                            </td>
                        </tr>
                ))}  
                </tbody>
            </table>
        </div>

     );
}


class Students extends Component
 {
    constructor(props){
        super(props)
        this.state = {
            students: [
                {id: 1, name: 'Mathias Alen', email:'ma@student.thomasmore.be', scores:[], passed: ''},
                {id: 2, name: 'Bulent Arslan', email:'ba@student.thomasmore.be', scores:[], passed: ''},
                {id: 3, name: 'Valérie Becquart', email:'vb@student.thomasmore.be', scores:[], passed: ''},
                {id: 4, name: 'Lode Bosmans', email:'lb@student.thomasmore.be', scores:[], passed: ''},
                {id: 5, name: 'Michal Davidse', email:'md@student.thomasmore.be', scores:[], passed: ''},
                {id: 6, name: 'Stijn De Preter', email:'sdp@student.thomasmore.be', scores:[], passed: ''},
                {id: 7, name: 'Davy Jans', email:'dj@student.thomasmore.be', scores:[], passed: ''},
                {id: 8, name: 'Lucy Peeters', email:'lp@student.thomasmore.be', scores:[], passed: ''},
                {id: 9, name: 'Ebert Rens', email:'er@student.thomasmore.be', scores:[], passed: ''},
                {id: 10, name: 'Hans Roekens', email:'hr@student.thomasmore.be', scores:[], passed: ''},
                {id: 11, name: 'Aäron Rombouts Katznelson', email:'ark@student.thomasmore.be', scores:[], passed: ''},
                {id: 12, name: 'Kevin Segers', email:'ks@student.thomasmore.be', scores:[], passed: ''},
                {id: 13, name: 'Johnny Urkens', email:'ju@student.thomasmore.be', scores:[], passed: ''},
                {id: 14, name: 'Bart Van Beek', email:'bvb@student.thomasmore.be', scores:[], passed: ''},
                {id: 15, name: 'Erwin Van Moorleghem', email:'evm@student.thomasmore.be', scores:[], passed: ''},
                {id: 16, name: 'Stef Vanbroekhoven', email:'sv@student.thomasmore.be', scores:[], passed: ''},
                {id: 17, name: 'Kevin Vandeputte', email:'kv@student.thomasmore.be', scores:[], passed: ''},
                {id: 18, name: 'Maarten Willoqué', email:'mw@student.thomasmore.be', scores:[], passed: ''},
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
                <StudentForm />
                <StudentOverview 
                    list = {this.state.students.filter((student) => student.passed === '' )}
                    onPassStudent={this.handlePassStudent}
                    onFailStudent={this.handleFailStudent}
                />
                <PassedStudents
                    list = {this.state.students.filter((student) => student.passed === true)}
                />
                <FailedStudents
                    list = {this.state.students.filter((student) => student.passed === false)}
                />
            </div>
        );
    }
}
 
export default Students;
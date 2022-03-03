import React, { useState } from 'react';
import './App.css';
import Students from './components/Students';
import SideBar from './components/SideBar';

function App() {

  //----- SET ALL DATA NEED FOR APPLICATION -----// 
  //-- course info
  const courseInfo = [{
    teacher: "Florian Smeyers",
    class: '3WT',
    topic: 'React',
    logo:'./images/feature-react.png',
    target: "De student ontwikkelt een Single Page Applicatie in React conform de ontwerpprincipes van de Redux state container met een ASP.NET Web API backend. De student deelt componenten op in Presentational en Container Components. De student gebruikt de middleware Redux-Thunk om in Redux asynchrone API calls uit te voeren.",
    credits: 4,
    campus: 'Campus Geel'
  }]

  //-- students array
  const [students, setStudents] = useState([
    {id: 1, name: 'John Doe', grade: '', thumb:'./images/eagle.png', color1:"#009cab", color2:"#f04c25"},
    {id: 2, name: 'Jane Doe', grade: '', thumb:'./images/hippo.png', color1:"#009cab", color2:"#f04c25" },
    {id: 3, name: 'John Doe 2', grade: '', thumb:'./images/monkey.png', color1:"#009cab", color2:"#f04c25" },
    {id: 4, name: 'Jane Doe 2', grade: '', thumb:'./images/wolf.png', color1:"#009cab", color2:"#f04c25"},
    {id: 5, name: 'John Doe 3', grade: '', thumb:'./images/rhino.png', color1:"#009cab", color2:"#f04c25" },
  ])

  //-- course status for selectlist
  const status = [
    {id:1, status: "Gestart"},
    {id:2, status: "Afgelopen"}
  ]

  //-- for conditional rendenring
  const [courseClosed, setCourseClosed] = useState(false)


  //----- FUNCTIONS AND HANDLERS -----//
  //-- close course
  function handleStatusChange(){
    setCourseClosed(!courseClosed)
  }

  //-- add score to student
  function adjustScoreStudent(id, score){
    console.log('I GET THIS: ', id + ' ' + score)
    //Find student in students array and set props of student
    const selectedstudent = students.filter((student) => student.id === parseInt(id))
    const grade = score * 5;
    selectedstudent[0].color1 = "#009cab, "+grade+'% ';
    selectedstudent[0].grade = score

    // create new array of students and filter out old student and concat adjusted student in
    const newStudents = students.filter((student) => student.id !== parseInt(id))
                                .concat(selectedstudent);
    
    //set Students Hook
    setStudents(newStudents)
  }

  //-- Clear student grade
  function handleClearGrade(id){
    console.log('KLIK ON CLEEAR GRADE')
    //Find student to change
    const selectedstudent = students.filter((student) => student.id === parseInt(id));
    selectedstudent[0].color1 = "#009cab";
    selectedstudent[0].grade = ''
  
    // create new array of students and filter out old student and concat adjusted student in
    const newStudents = students.filter((student) => student.id !== parseInt(id))
                                .concat(selectedstudent);
    //set Students Hook
    setStudents(newStudents)
  }

  //-- Nudge grade up or down
  function handleAdjustGrade(id, operator){
    //find student to change
    const selectedstudent = students.filter((student) => student.id === parseInt(id))
    
    //get the current grade of the selected student
    var currentGrade = selectedstudent[0].grade
    if (currentGrade === ''){
      var currentGrade = 0
    } else {
      currentGrade = parseFloat(currentGrade)
    }
    
    // add or substract 0.1 depending on operator user clicked on
    if(operator === '+'){
      var score = currentGrade + 0.1
    } else {
      var score = currentGrade - 0.1
    }
    
    // check boundaries of grade
    if (score > 20) {
      score = 20
    } else if( score < 0){
      score = 0
    }
    
    //round of score
    score = Math.round((score + Number.EPSILON) *100)/100;
            
    //Adjust array by using the adjustScore function by passing the student ID and the new score.
    adjustScoreStudent(id, score)
  } 


  //--RETURN WITH PROPS TO PASS --//
  return ( 
    <div className='row'>
      <SideBar
        courseClosed = {courseClosed} 
        courseInfo = {courseInfo}
        statuses = {status}
        onChangeStatus={handleStatusChange}
      />
      <Students
        courseClosed = {courseClosed}
        students = {students}
        scoreStudent = {adjustScoreStudent}
        clearGrade = {handleClearGrade}   
        adjustGrade = {handleAdjustGrade} 
      />

    </div>
   

  );
}

export default App;

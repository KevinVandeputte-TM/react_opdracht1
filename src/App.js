import React, { useState } from 'react';
import './App.css';
import Students from './components/Students';
import SideBar from './components/SideBar';
import TaskList from './components/TaskList';

function App() {

  //----- SET ALL DATA NEED FOR APPLICATION -----// 
  //-- course info
  const courseInfo = [{
    teacher: "Theo Fox",
    class: '3WT',
    topic: 'React',
    logo:'./images/feature-react.png',
    target: "React maakt het creëren van interactieve UIs een aangename ervaring. Ontwerp eenvoudige datapresentaties voor elke state van uw applicatie. React zal alleen de juiste componenten bijwerken en renderen wanneer uw data verandert.",
    credits: 4
  }]

  //-- students array
  const [students, setStudents] = useState([
    {id: 1, name: 'Gaston Mertens', grade: '', thumb:'./images/eagle.png', color1:"#009cab", color2:"#f04c25"},
    {id: 2, name: 'Natacha Green', grade: '', thumb:'./images/hippo.png', color1:"#009cab", color2:"#f04c25" },
    {id: 3, name: 'Johan De Smet', grade: '', thumb:'./images/monkey.png', color1:"#009cab", color2:"#f04c25" },
    {id: 4, name: 'Julia Simon', grade: '', thumb:'./images/wolf.png', color1:"#009cab", color2:"#f04c25"},
    {id: 5, name: 'Niels Maes', grade: '', thumb:'./images/rhino.png', color1:"#009cab", color2:"#f04c25" },
  ])

  //-- course status for selectlist
  const status = [
    {id:1, status: "Gestart"},
    {id:2, status: "Afgelopen"}
  ]

  //-- for conditional rendenring
  const [courseClosed, setCourseClosed] = useState(false)

  //-- tasksdata
  const [tasks, setTasks] = useState([
    {id:'1', description:'Lorem ipsum', completed: true},
    {id:'2', description:'Consectetur adipiscing', completed: false},
    {id:'3', description:'Nemo enim ipsam', completed: false},
    {id:'4', description:'Quis autem vel', completed: false}
  ])

  //-- new task
  const [newTask, setNewTask] = useState('');
  


  //----- FUNCTIONS AND HANDLERS -----//
  //-- close course
  function handleStatusChange(){
    setCourseClosed(!courseClosed)
  }

  //-- add score to student
  function adjustScoreStudent(id, score){
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

  // drag item in tasklist
  function handleDragItem (result){
    //Needed to check if the destination exist. Out of bound error
    if(!result.destination) return;
    // set tasks in new order.
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items)
  }

  // toggle task completion
  function handleToggleCompletion(index){   
    const items = Array.from(tasks);
    const [toggledTask] = items.splice(index, 1);
    toggledTask.completed = !toggledTask.completed
    items.splice(index, 0, toggledTask)
    setTasks(items)
  }

  //task input
  function updateTaskInput(e){
    const value = e.target.value
    setNewTask(value)
  }

  //add task
  function handleAddTask(){
    if(!newTask){
      return
    } else{
      const taskID = tasks.length + 1
      const task = {id: taskID.toString(), description: newTask, completed: false}
      const items = Array.from(tasks);
      items.unshift(task)
      setTasks(items)
      setNewTask('')
    }

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
      <TaskList 
        tasks = {tasks}
        courseClosed = {courseClosed}
        onDrag = {handleDragItem}
        onToggleComplete = {handleToggleCompletion}
        newTask = {newTask}
        onInputTask = {updateTaskInput}
        addTask={handleAddTask}

      />

    </div>
   

  );
}

export default App;

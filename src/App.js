import React, { useState } from 'react';
import './App.css';
import Students from './components/Students';
import SideBar from './components/SideBar';

function App() {

  const courseInfo = [{
    teacher: "Florian Smeyers",
    class: '3WT',
    topic: 'React',
    logo:'./images/feature-react.png',
    target: "De student ontwikkelt een Single Page Applicatie in React conform de ontwerpprincipes van de Redux state container met een ASP.NET Web API backend. De student deelt componenten op in Presentational en Container Components. De student gebruikt de middleware Redux-Thunk om in Redux asynchrone API calls uit te voeren.",
    credits: 4,
    campus: 'Campus Geel'
  }]

  const status = [
    {id:1, status: "Gestart"},
    {id:2, status: "Afgelopen"}
  ]

  const [courseStatus, setCourseStatus] = useState(status[0].id)

  function handleStatusChange(id){
    console.log("KOMT BINNEN: ", id)
    setCourseStatus(parseInt(id))
    console.log('Dit is de nieuwe status:', courseStatus)
  }


  return ( 
    <div className='row'>
      <SideBar
        courseStatus = {courseStatus} 
        courseInfo = {courseInfo}
        statuses = {status}
        onChangeStatus={handleStatusChange}
      />
      <Students />

    </div>
   

  );
}

export default App;

import logo from './logo.svg';
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

  return ( 
    <div className='row'>
      <SideBar 
        courseInfo = {courseInfo}
      />
      <Students />

    </div>
   

  );
}

export default App;

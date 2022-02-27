import React from 'react';
import './SideBar.css'

const SideBar = (props) => {

    return (
        <div className='sidebar'>
            <div className='content'>
                <h4 className='title'><img src={props.courseInfo[0].logo} height='27px'/> <span>{props.courseInfo[0].class} - {props.courseInfo[0].topic} ({new Date().getFullYear()})</span></h4>
                <p><span className='bold'>Docent: </span>{props.courseInfo[0].teacher} </p>
                <p><span className='bold'>Studiepunten: </span> {props.courseInfo[0].credits}</p>
                <p><span className='bold'>Omschrijving: </span> {props.courseInfo[0].target}</p>
                <div>
                    <p><span className='bold'>Locatie: </span></p>
                    <p>MAP HERE</p>
                </div>
                
            </div>
        </div> 
     );
}
 
export default SideBar;
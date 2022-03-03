import React, { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import './SideBar.css';
// import mapStyles from './mapStyles';


const Map = () => {

    const [infoCampus, setInfoCampus] = useState(null)

    return ( 
        <div>
            <GoogleMap 
                defaultZoom={12} 
                defaultCenter={{lat:51.16, lng:4.96}}
                // defaultOptions={{styles: mapStyles}}
            >
                <Marker position={{lat:51.1609429, lng: 4.961399}}
                        icon={{
                            url: './images/tm_logo.png',
                            scaledSize: new window.google.maps.Size(50,26.75)
                        }}
                        onClick={() => {
                            setInfoCampus(1)
                        }}
                />

                {infoCampus && (
                    <InfoWindow position={{lat:51.165, lng: 4.961399}}
                                onCloseClick={() => {
                                    setInfoCampus(null)
                                }}            
                    >
                        <div>
                            <h4>Campus Geel</h4>
                            <p>Kleinhoefstraat 4</p>
                            <p>2440 Geel</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
        
     );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const SideBar = (props) => {

    const[editable, setEditable] = useState(props.courseStatus)

    const onChange = (e) =>{
        setEditable(e.target.value)
        props.onChangeStatus(e.target.value)
    }

     if(props.courseClosed){
         return(
            <div className='sidebar'>
                <div className='content'>
                    <h4 className='title'><img src={props.courseInfo[0].logo} height='27px'/> <span>{props.courseInfo[0].class} - {props.courseInfo[0].topic} ({new Date().getFullYear()})</span></h4>
                    <h5>Cursus afgelopen</h5>
                    <p><span className='bold'>Docent:<br/></span>{props.courseInfo[0].teacher} </p>
                    <p><span className='bold'>Studiepunten:<br/></span> {props.courseInfo[0].credits}</p>
                    <p><span className='bold'>Omschrijving:<br/><br/></span> {props.courseInfo[0].target}</p>
                    <div>
                        <p><span className='bold'>Locatie: </span></p>
                    </div>
                    <div style={{width: '100%', height:'225px'}}>
                        <WrappedMap 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCWpUsDL5UWEJSSU48CITkz3TrygUevEi4`}
                            loadingElement={<div style={{height: '100%'}}/>}
                            containerElement={<div style={{height: '100%'}}/>}
                            mapElement={<div style={{height: '100%'}}/>}
                        />
                    </div>              
                </div>
            </div> 
         )
    } else {
        return (
            <div className='sidebar'>
                <div className='content'>
                    <h4 className='title'><img src={props.courseInfo[0].logo} height='27px'/> <span>{props.courseInfo[0].class} - {props.courseInfo[0].topic} ({new Date().getFullYear()})</span></h4>
                    <select value={editable} className='form-control' onChange={(e) => onChange(e)}>
                        {props.statuses.map((status) =>(
                            <option key={status.id} value={status.id}>
                                {status.status}
                            </option>
                        ))}
    
                    </select>
                    <p><span className='bold'>Docent:<br/></span>{props.courseInfo[0].teacher} </p>
                    <p><span className='bold'>Studiepunten:<br/></span> {props.courseInfo[0].credits}</p>
                    <p><span className='bold'>Omschrijving:<br/><br/></span> {props.courseInfo[0].target}</p>
                    <div>
                        <p><span className='bold'>Locatie: </span></p>
                    </div>
                    <div style={{width: '100%', height:'225px'}}>
                        <WrappedMap 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCWpUsDL5UWEJSSU48CITkz3TrygUevEi4`}
                            loadingElement={<div style={{height: '100%'}}/>}
                            containerElement={<div style={{height: '100%'}}/>}
                            mapElement={<div style={{height: '100%'}}/>}
                        />
                    </div>              
                </div>
            </div>  
         );
    }
    
}
 
export default SideBar;
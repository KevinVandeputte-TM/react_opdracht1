import React, { Component } from 'react';


function NotBoardedPassengers(props) {
    return (  
        <div>
            <h2>Passengers waiting to board</h2>
            <ul>
                {props.list.map((passenger) =>(
                    <li key={passenger.id}> 
                        <span>{passenger.name} - {passenger.seat}</span>
                        <button onClick={() => props.onBoardPassenger(passenger.id, passenger.name, passenger.seat)}>Board Passenger</button>
                    </li>
                ))}               
            </ul>
        </div> 
    );
}

function BoardedPassengers(props) {
    return ( 
        <div>
            <h2>Boarded passengers</h2>
            <ul>
                {props.list.map((passenger) =>(
                    <li key={passenger.id}> 
                        <span>{passenger.name} - {passenger.seat}</span>
                        <button onClick={() => props.onEmbarkPassenger(passenger.id, passenger.name, passenger.seat)}>Embark Passenger</button> 
                    </li>
                ))}               
            </ul>
        </div>

     );
}



class Passengers extends Component
 {
    constructor(props){
        super(props)
        this.state = {
            passengers: [
                {id: 1, name: 'Valérie Becquart', seat:"A1", boarded: false},
                {id: 2, name: 'Kevin Vandeputte', seat:"A2", boarded: false},
                {id: 3, name: 'Michal Davidse', seat:"A3", boarded: false},
                {id: 4, name: 'Lode Bosmans', seat:"A4", boarded: false},
                {id: 5, name: 'Stijn De Preter', seat:"A5", boarded: false},
                {id: 6, name: 'Johnnu Urkens', seat:"A6", boarded: false},
                {id: 7, name: 'Kevin Segers', seat:"B1", boarded: false},
                {id: 8, name: 'Erwin Van Moorleghem', seat:"B3", boarded: false},
                {id: 9, name: 'Maarten Willoque', seat:"C4", boarded: false},
                {id: 10, name: 'Mathias Alen', seat:"C5", boarded: false},
                {id: 11, name: 'Hans Roekens', seat:"D1", boarded: false}
            ]
        }

        this.handlePassengerBoarding = this.handlePassengerBoarding.bind(this)
    }

    handlePassengerBoarding(id, name, seat){
        this.setState((currentState) => {
            const passenger = currentState.passengers.find((passenger) => passenger.id === id)
            return{
                passengers: currentState.passengers.filter((passenger) =>passenger.id !== id)
                    .concat([{
                        id, name, seat,
                        boarded: !passenger.boarded
                    }])
            }
        })

    }

    render() { 
        return (
            <div>
                <ul>
                <NotBoardedPassengers 
                    list = {this.state.passengers.filter((passenger) => passenger.boarded !== true)}
                    onBoardPassenger={this.handlePassengerBoarding}
                />
                <BoardedPassengers 
                    list = {this.state.passengers.filter((passenger) => passenger.boarded === true)}
                    onEmbarkPassenger={this.handlePassengerBoarding}
                />
                </ul>
            </div>
        );
    }
}
 
export default Passengers;
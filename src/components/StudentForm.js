import React from 'react';

class StudentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            score: ''
        }
    }




    render() { 
        return (
            <form>
                <label>
                    Kies student:
                    <input type="text" placeholder='naam student' value={this.state.name}/>
                </label>
                <label>
                    Punten:
                    <input type="text" placeholder='geef punten' value={this.state.score}/>
                </label>
                <input type="submit" value="Geef punten in" />
            </form>
        );
    }
}
 
export default StudentForm;
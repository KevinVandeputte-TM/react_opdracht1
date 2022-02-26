import React from 'react';
import './Student.css'

const StudentForm = () => {
    return ( 
        <form>
            <label>
                Kies student:
                <input type="text" placeholder='naam student' />
            </label>
            <label>
                Punten:
                <input type="text" placeholder='geef punten' />
            </label>
            <input type="submit" value="Geef punten in" />
        </form>
     );
}
  
export default StudentForm;
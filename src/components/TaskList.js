import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TaskList.css';

const InputTask = (props) => {
    return ( 
        <div className='input-field'>
            <div className='center'>
                <input
                    type = "text"
                    className='form-control-task'
                    placeholder='Nieuwe taak'
                    onChange={props.onInputTask}
                    value={props.newTask}
                />
            </div>
            <div>
                <input className='btn' type="submit" value="Voeg taak toe" 
                    onClick={(e) => props.addTask(e)}
                />
            </div>
        </div>
     );
}

const TaskItems = (props) => {
    return ( 
        <div className='center-items'>
            <DragDropContext onDragEnd = {props.onDrag}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <ul className="tasklist"  {...provided.droppableProps} ref={provided.innerRef}>
                            {props.tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className='btn-task'> 
                                                <button className={task.completed ? "ctrl-btn-checked" : 'ctrl-btn-check'} onClick={() => props.onToggleComplete(index)}> &#x2713; </button>
                                            </div>
                                            <p className={task.completed ? "checked" : null}>
                                                {task.description}
                                            </p>
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
     );
}
 



const TaskList = (props) => {

    if(props.courseClosed){
        return(
            <div className='taskbar flex-column'>
                <h4 className='title'><span>To do's</span></h4>
                <TaskItems onDrag={props.onDrag}
                    tasks = {props.tasks}
                    onToggleComplete = {props.onToggleComplete}
                />               
            </div>
        )
    }

    return ( 
        <div className='taskbar flex-column'>
        <h4 className='title'><span>To do's</span></h4>
            <InputTask 
                onInputTask = {props.onInputTask}
                newTask = {props.newTask}
                addTask = {props.addTask}
            />

            <TaskItems onDrag={props.onDrag}
                tasks = {props.tasks}
                onToggleComplete = {props.onToggleComplete}
            />               
        </div>
     );
}
 
export default TaskList;
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TaskList.css';

const InputTask = (props) => {
    return ( 
        <div>
            <div>
                <input
                    type = "text"
                    className='form-control'
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
 


const TaskList = (props) => {
    return ( 
        <div>
            <div>
                <InputTask 
                    onInputTask = {props.onInputTask}
                    newTask = {props.newTask}
                    addTask = {props.addTask}
                />
            </div>
            <div>
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

        </div>
     );
}
 
export default TaskList;
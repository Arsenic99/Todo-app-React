import '../../css/tasks.css'
import '../../css/newtask.css'
import { useRef } from 'react';
import Task from './task/task';

const Tasks = (props) => {
    const inputEl = useRef();
    const updateTask = (id) =>{
        if(inputEl.current.value !== ''){
            props.updateTask(inputEl.current.value , id);
            inputEl.current.value  = '';
        }
        else
        {
            alert("Box is empty");
        }
    }
    return (
        <div className="tasks">
            {props.tasks.map((item) => (!item.isEdit ?
            <Task tasks={item.text}
                    key={Math.random()}
                    id={item.id}
                    done={item.isDone}
                    doneHandler={props.doneHandler}
                    deleteTask={props.deleteTask}
                    editTask={props.editTask} /> 
            :
            (
                <div className='task'  key={Math.random()}>
                    <input type="text" defaultValue={item.text}  className="input input__tasks" ref={inputEl}/>
                    <button className="button button__tasks" onClick={e=>updateTask(item.id)}>Save</button>
                </div>
            ) 
            

            )
            )}
        </div>
    )
}
export default Tasks;
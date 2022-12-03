import { useRef } from 'react';
import '../../css/newtask.css'


const NewTask = (props) =>{
    const inputEl = useRef();
    const addTask = () =>{
        if(inputEl.current.value !== ''){
            props.addTask(inputEl.current.value);
            inputEl.current.value = '';
        }
        else
        {
            alert("Box is empty");
        }
    }
    const addTaskEnter = (event) =>{
        if(inputEl.current.value !== '' && event.key==='Enter'){
            props.addTask(inputEl.current.value);
            inputEl.current.value = '';
        }
    }
    return (
        <div className="newtask">
            <input type="text" placeholder="Add new task" className="input" ref={inputEl} onKeyDown={addTaskEnter}/>
            <button className="button" onClick={addTask}>Add task</button>
        </div>
    )
}
export default NewTask;

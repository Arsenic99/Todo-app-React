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
    return (
        <div className="newtask">
            <input type="text" placeholder="Add new task" className="input" ref={inputEl}/>
            <button className="button" onClick={addTask}>Add task</button>
        </div>
    )
}
export default NewTask;

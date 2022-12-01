import '../../../css/task.css'
import editHandler from '../../../assets/edit.png'
import deleteHandler from '../../../assets/delete.png'

const Task = (props) => {
    const doneHandler = () => {
        props.doneHandler(props.id);
    } 
    const editTask = () => {
        props.editTask(props.id);
    }
    const deleteTask = () => {
        props.deleteTask(props.id);
    }
    return (
        <div>
            <div className="checkbox">
                <input type="checkbox" className="check" id={props.id} defaultChecked={props.done}/>
                <label htmlFor={props.id} className="label" onClick={doneHandler}>
                    <svg viewBox="0 0 100 100" height="50" width="50">
                        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
                        <g transform="translate(0,-952.36216)" id="layer1">
                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                        </g>
                    </svg> 
                    <span>
                        {props.tasks}
                    </span>
                </label>
                <img src={editHandler} alt='edit' className="edit" onClick={editTask}/>
                <img src={deleteHandler} alt="delete" className='delete' onClick={deleteTask}/>
            </div>
        </div>
    )
}

export default Task;
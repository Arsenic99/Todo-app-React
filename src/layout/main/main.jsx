import '../../css/main.css'
import Title from '../../components/title/title';
import Tasks from '../../components/tasks/tasks';
import NewTask from '../../components/newtask/newtask';
import { useState } from 'react';

const Main = (props) =>{
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const addTask = (task) =>{
        let taskObj = ({
            id : Math.random(),
            isEdit : false,
            isDone : false,
            text : task
        })
        setTasks(oldArray => [...oldArray, taskObj]);
    }
    const doneHandler = (id) =>{
        setTimeout(()=>{
            setTasks(prevState=>{
                const newState = prevState.map(obj=>{
                    if(obj.id === id){
                        return {...obj, isDone: !obj.isDone};
                    }
                    return obj;
                })
                return newState;
            })
        },100)
        
    }
    const editTask = (id) =>{
        if(!edit)
        {
            setTasks(prevState=>{
                const newState = prevState.map(obj=>{
                    if(obj.id === id){
                        return {...obj, isEdit: true};
                    }
                    return obj;
                })
                return newState;
            })
        }
        
        setEdit(true);
    }
    const updateTask = (input, id) =>{
        setTasks(prevState=>{
            const newState = prevState.map(obj=>{
                if(obj.id === id){
                    return {...obj, text: input, isEdit: false};
                }
                return obj;
            })
            return newState;
        })
        setEdit(false);
    }
    const deleteTask = (id) =>{
        setTasks(prev => prev.filter(task => task.id !== id ))
    }
    console.log(tasks);
    return (
        <div className="main">
            <Title />
            <Tasks tasks={tasks} deleteTask={deleteTask} doneHandler={doneHandler} editTask={editTask} edit={edit} updateTask={updateTask} className="tasks"/>
            <NewTask addTask={addTask}/>
        </div>
    )
}
export default Main;
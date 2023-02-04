import TaskTable from './taskTable'
import InputForm from './inputForm'
import TaskModel from '../models/taskModel'
import { useEffect, useState } from 'react'

export default function TaskGroup() {
    
    const initialTaskList: TaskModel[] = [
        { id: 1, seq: 1, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() },
    ];

    const [newData, setNewData] = useState('');
    const [taskList, setTaskList] = useState(initialTaskList);

    const createNewTodo = (message: string) => {
        if (!message) return

        const id = taskList.length + 1
        const newTask = { id: id, seq: id, message: message, color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() }

        setTaskList([...taskList, newTask])
    }

    useEffect(() => {
        createNewTodo(newData)
    }, [newData])

    return (
        <>
            <InputForm setNewData={setNewData}></InputForm>
            <TaskTable taskList={taskList}></TaskTable>
        </>
    )
}

import TaskTable from './taskTable'
import InputForm from './inputForm'
import TaskModel from '../models/taskModel'
export default function TaskGroup() {
    

    const taskList: TaskModel[] = [
        { id: 1, seq: 1, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: true, timeStamp: new Date() },
        { id: 2, seq: 2, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: true, timeStamp: new Date() },
        { id: 3, seq: 3, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() },
        { id: 4, seq: 4, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() },
        { id: 5, seq: 5, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() },
        { id: 6, seq: 6, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() },
        { id: 7, seq: 7, message: 'Hello World', color: '#fff', isImportant: false, isCompleted: false, timeStamp: new Date() },
    ];

    return (
        <>
            <InputForm></InputForm>
            <TaskTable  taskList={taskList}></TaskTable>
        </>
    )
}

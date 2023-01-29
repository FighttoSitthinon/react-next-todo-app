import { Container } from "@nextui-org/react";
import styles from '@/styles/TaskTable.module.css'
import TaskModel from '../models/taskModel';
import TaskItem from './taskItem';

export default function TaskTable() {

    const items: TaskModel[] = [
        { id: 1, seq: 1, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
        { id: 2, seq: 2, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
        { id: 3, seq: 3, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
        { id: 4, seq: 4, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
        { id: 5, seq: 5, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
        { id: 6, seq: 6, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
        { id: 7, seq: 7, title: 'Hello', description: 'Hello World', color: '#fff', isImportant: false, isDeleted: false, timeStamp: new Date() },
    ];

    return (
        <Container md>
            <div className={styles.table}>
                {items.map(item => <TaskItem key={item.id}></TaskItem>)}
            </div>
        </Container>
    )
}
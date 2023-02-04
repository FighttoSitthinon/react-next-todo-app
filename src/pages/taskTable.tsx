import { Container } from "@nextui-org/react";
import styles from '@/styles/TaskTable.module.css'
import TaskModel from '../models/taskModel';
import TaskItem from './taskItem';

export default function TaskTable({ taskList }: { taskList: TaskModel[] }) {
    taskList.sort(function (a, b) {
        return b.seq - a.seq;
    });

    return (
        <Container md>
            <div className={styles.table}>
                {taskList.map(item => <TaskItem key={item.id} task={item}></TaskItem>)}
            </div>
        </Container>
    )
}
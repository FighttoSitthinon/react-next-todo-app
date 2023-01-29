import { Card, Text, Image } from "@nextui-org/react";
import { Caveat } from '@next/font/google'
import styles from '@/styles/TaskItem.module.css';
import TaskModel from '../models/taskModel';
import { useState } from 'react';

const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
})

export default function TaskItem({ task }: { task: TaskModel }) {
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    const toggleTask = () => {
        task.isCompleted = !task.isCompleted
        setIsCompleted(task.isCompleted)
    }

    return (
        <Card
            className={styles.item}
            css={{ w: "100%" }}
            isPressable
            isHoverable
            onPress={() => toggleTask()}
            variant="bordered" >
            <Card.Body>
                <div className={styles.flexcontainer}>
                    <div className={styles.checkcontainer}>
                        <div className={`${styles.displaycheck} ${isCompleted ? styles.checked : ''}`}></div>
                    </div>
                    <div className={styles.textcontainer}>
                        <Text
                            size={24}
                            css={{ color: task.color }}
                            className={`${caveat.className} ${isCompleted ? styles.textstrike : ''}`}
                        >{task.message}</Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
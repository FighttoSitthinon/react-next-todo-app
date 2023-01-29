import { Card, Text, Image } from "@nextui-org/react";
import { Caveat } from '@next/font/google'
import styles from '@/styles/TaskItem.module.css';
import TaskModel from '../models/taskModel';
import { Dispatch, SetStateAction } from "react";

const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
})

export default function TaskItem({ task }: { task: TaskModel }, { setTaskActionId }: { setTaskActionId: Dispatch<SetStateAction<number>> }) {

    const toggleTask = () => {
        setTaskActionId(task.id)
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
                        <div className={`${styles.displaycheck} ${task.isCompleted ? styles.checked : ''}`}></div>
                    </div>
                    <div className={styles.textcontainer}>
                        <Text
                            size={24}
                            css={{ color: task.color }}
                            className={`${caveat.className} ${task.isCompleted ? styles.textstrike : ''}`}
                        >{task.message}</Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
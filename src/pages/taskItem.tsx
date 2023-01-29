import { Card, Text, Image } from "@nextui-org/react";
import { Caveat } from '@next/font/google'
import styles from '@/styles/TaskItem.module.css';
const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
  })
export default function TaskItem() {
  
    const text =
    "NextUI gives you the best developer experience with all the features you need for building beautiful and modern websites and applications.";
    return (
        <Card
            className={styles.item}
            css={{ w: "100%" }}
            isPressable
            isHoverable
            variant="bordered" >
            <Card.Body>
                <div className={styles.flexcontainer}>
                    <div className={styles.imagecontainer}>
                        <Image
                            className={styles.userImage}
                            width={80}
                            height={80}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            alt="Default Image"
                        />
                    </div>
                    <div className={styles.textcontainer}>
                        <Text size={24} css={{ color: '#fff' }} className={caveat.className}>{text}</Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
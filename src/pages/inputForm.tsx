import { Container, Textarea, Grid, useInput, Spacer, Button } from "@nextui-org/react";
import styles from '@/styles/InputForm.module.css'
import TaskModel from '../models/taskModel';

export default function InputForm() {
    const {
        value: controlledValue,
        setValue: setControlledValue,
        reset,
        bindings,
    } = useInput("");
    // const textareaRef = React.useRef(null);
    const onPress = () => {
        // if (textareaRef.current) {
        //     textareaRef.current.value = Math.random().toString(32);
        // }
    };
    return (
        <Container md>
            <div className={styles.inputgroup}>
                <Textarea className={styles.textarea} {...bindings} css={{ width: '100%' }} placeholder="Type something..." />
                <Spacer x={1} />
                <Grid.Container gap={0.5} css={{ 'justify-content': 'flex-end' }}>
                    <Grid>
                        <Button
                            className={styles.submitbtn}
                            css={{ width: '150px' }}
                            auto
                            rounded
                            color="gradient"
                            onPress={() => setControlledValue(Math.random().toString(32))}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            className={styles.submitbtn}
                            css={{ width: '150px' }}
                            rounded
                            auto 
                            flat 
                            onPress={() => reset()}>
                            Clear
                        </Button>
                    </Grid>
                </Grid.Container>
            </div>

        </Container>
    );
}
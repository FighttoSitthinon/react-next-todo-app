import { Container, Textarea, Grid, useInput, Spacer, Button } from "@nextui-org/react";
import styles from '@/styles/InputForm.module.css'
import { SetStateAction, useState } from 'react';

export default function InputForm({ setNewData }: { setNewData: React.Dispatch<SetStateAction<string>>}) {

    const {
        value: controlledValue,
        setValue: setControlledValue,
        reset,
        bindings,
    } = useInput("");

    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const message =  event.target.message.value

        setNewData(message)

        reset()
    }
    return (
        <Container md>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputgroup}>
                    <Textarea
                        id="message"
                        name="message"
                        required
                        className={styles.textarea}
                        {...bindings}
                        css={{ width: '100%' }}
                        placeholder="Type something..." />
                    <Spacer x={1} />
                    <Grid.Container gap={0.5} css={{ 'justify-content': 'flex-end' }}>
                        <Grid>
                            <Button
                                className={styles.submitbtn}
                                css={{ width: '150px' }}
                                auto
                                rounded
                                color="gradient"
                                type="submit"
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
            </form>
        </Container>
    );
}
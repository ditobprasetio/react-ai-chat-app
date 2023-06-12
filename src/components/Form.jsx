import { Button, Container, FormControl, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const FormSection = ({ getResponse }) => {
    const [question, setQuestion] = useState("");

    return (
        <>
            <Container my="10px">
                <FormControl>
                    <Textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        type="text"
                        placeholder="Send a message."
                        boxShadow="base"
                        bgColor="#343539"
                        border="none"
                    />
                    <Button
                        my="10px"
                        w="100%"
                        bgColor="#010101"
                        color="#d5d6da"
                        _hover={{
                            background: "#343539",
                        }}
                        onClick={() => getResponse(question, setQuestion)}
                    >
                        Generate Answer
                    </Button>
                </FormControl>
            </Container>
        </>
    );
};

export default FormSection;

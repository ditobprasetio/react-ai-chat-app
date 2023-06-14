import {
    Button,
    Container,
    FormControl,
    Input,
    Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const FormSection = ({ getResponse, getImage }) => {
    const [question, setQuestion] = useState("");
    const [prompt, setPrompt] = useState("");
    const location = useLocation();

    return (
        <>
            <Container my="10px">
                {location.pathname === "/" ? (
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
                            Generate Answer 🤖
                        </Button>
                    </FormControl>
                ) : (
                    <FormControl>
                        <Input
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            type="text"
                            placeholder="Describe your image."
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
                            onClick={() => getImage(prompt, setPrompt)}
                        >
                            Generate Image 🤖
                        </Button>
                    </FormControl>
                )}
            </Container>
        </>
    );
};

export default FormSection;

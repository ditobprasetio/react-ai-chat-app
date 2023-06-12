import { Box, Container, Text } from "@chakra-ui/react";

const AnswerSection = ({ answers, loading }) => {
    return (
        <>
            <Container>
                <hr />
                {loading && (
                    <Box
                        w="100%"
                        my="4px"
                        display="flex"
                        justifyContent="center"
                    >
                        <Text>Loading ...</Text>
                    </Box>
                )}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="10px"
                >
                    {!answers ? (
                        <Box p="20px">
                            <Text fontSize="2xl">Ask me anything...</Text>
                        </Box>
                    ) : (
                        <Box w="100%">
                            {answers.map((answer) => {
                                return (
                                    <Box key={answer?.question} w="100%" my="2">
                                        <Box
                                            p="10px"
                                            w="100%"
                                            minH="50px"
                                            bgColor="#ca228f"
                                        >
                                            <Text>{answer.question}</Text>
                                        </Box>
                                        <Box
                                            p="10px"
                                            w="100%"
                                            bgColor="#343539"
                                        >
                                            <Text
                                                style={{
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                {answer.answer}
                                            </Text>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default AnswerSection;

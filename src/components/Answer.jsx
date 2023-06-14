import { Box, Container, Text } from "@chakra-ui/react";

const AnswerSection = ({ answers, loading }) => {
    return (
        <>
            <Container>
                <hr />
                {loading && (
                    <Box
                        w="100%"
                        my="8px"
                        display="flex"
                        justifyContent="center"
                    >
                        <Text>Generating answer... Please Wait...</Text>
                    </Box>
                )}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="10px"
                >
                    {answers.length === 0 ? (
                        <Box p="20px">
                            <Text fontSize="xl">Ask me anything...</Text>
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

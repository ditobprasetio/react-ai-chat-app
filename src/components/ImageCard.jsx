import { Box, Container, Image, Text } from "@chakra-ui/react";

const ImageCard = ({ images, loading }) => {
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
                        <Text>Generating image... Please Wait...</Text>
                    </Box>
                )}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="10px"
                >
                    {!images ? (
                        <Box p="20px">
                            <Text fontSize="xl">Ask me anything...</Text>
                        </Box>
                    ) : (
                        <Box w="100%" my="2">
                            <Box
                                p="10px"
                                w="100%"
                                minH="50px"
                                bgColor="#ca228f"
                            >
                                <Text>{images.prompt}</Text>
                            </Box>
                            <Box
                                p="10px"
                                w="100%"
                                bgColor="#343539"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                {images.data?.map((image, index) => {
                                    return (
                                        <Image
                                            key={index}
                                            src={image.url}
                                            alt={images.prompt}
                                            my="4px"
                                        />
                                    );
                                })}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default ImageCard;

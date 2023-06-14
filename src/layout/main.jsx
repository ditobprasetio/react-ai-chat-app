import { Box, HStack, Link } from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Box w="100%" display="flex" justifyContent="center" mb="20px">
                <HStack>
                    <Link
                        as={NavLink}
                        to="/"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                            };
                        }}
                        fontSize="20px"
                    >
                        Chat
                    </Link>
                    <Link
                        as={NavLink}
                        to="/image"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                            };
                        }}
                        fontSize="20px"
                    >
                        Image
                    </Link>
                </HStack>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </>
    );
};

export default Main;

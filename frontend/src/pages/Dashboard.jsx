import React from 'react';
import { Box, Flex, Text, Link, Button, VStack, HStack, Input } from "@chakra-ui/react";

const Dashboard = () => {
    return (
        <Flex height="100vh">
            <Box  mt="20px" height="500px" divideY="4px" rounded="lg" width="250px" bg="blue.600" color="white" p="18px" boxShadow="lg">
                <Text fontSize="2xl" mb="4">Menu</Text>
                <VStack spacing="4" align="start">
                    <Link href="#" display="block" py="2" color="white">Dashboard</Link>
                    <Link href="#" display="block" py="2" color="white">Profile</Link>
                    <Link href="#" display="block" py="2" color="white">Settings</Link>
                    <Link href="#" display="block" py="2" color="white">Logout</Link>
                </VStack>
            </Box>
            <Flex flex="1" direction="column" p="20px">
                <HStack spacing="20px" mb="20px">
                    <Box height="800px" rounded="lg" flex="1" border="1px solid #ccc" p="20px" boxShadow="lg">
                        <Text textStyle="body" fontSize="2xl" mb="4">Summary</Text>
                        <Text mb="4">This is the summary section. You can add details or an overview here.</Text>
							<Box height="400px"rounded="lg" flex="1" border="1px solid #ccc" p="20px" boxShadow="lg">
							</Box>
                        <Button colorPalette="blue" variant="surface" p="20px" color="white">Get summary</Button>
                    </Box>
                    <Box height="800px" rounded="lg" flex="1" border="1px solid #ccc" p="20px" boxShadow="lg">
                        <Text fontSize="2xl" mb="4">Transcript</Text>
                        <Text mb="4">This is the transcript section. Full details or logs can be added here.</Text>
						<Box height="400px"rounded="lg" flex="1" border="1px solid #ccc" p="20px" boxShadow="lg">
							</Box>
                        <Button position="absolute" bottom="" colorPalette="blue" variant="surface" p="20px" color="white">Get transcript</Button>
                    </Box>
                </HStack>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
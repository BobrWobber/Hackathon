import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Button, VStack, IconButton } from "@chakra-ui/react";
import '../css/dashboard.css';
import HomePage from "./HomePage"
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';
import mockData from './mockData.json';


const Message = ({ text, isUser }) => {
    return (
        <Box
            alignSelf={isUser ? 'flex-end' : 'flex-start'}
            bg={isUser ? 'blue.400' : 'green.300'}
            color={isUser ? 'white' : 'black'}
            p="10px"
            borderRadius="10px"
            maxWidth="70%"
			ml={isUser ? 'auto' : '0'}
			mb="10px"
        >
            <Text>{text}</Text>
        </Box>
    );
};

const Dashboard = () => {

	const [transcript, setTranscript] = useState([]); // non empty string, but  empty array "([])"

    // useEffect(() => {
    //     // Fetch the JSON data from the backend
    //     fetch('/path/to/your/json/file')
    //         .then(response => response.json())
    //         .then(data => {
    //             // Assuming the JSON data has a 'transcript' field
    //             setTranscript(data.transcript);
    //         })
    //         .catch(error => console.error('Error fetching transcript:', error));
    // }, []);

	useEffect(() => {
        // Use the mock JSON data for testing
        setTranscript(mockData.transcript);
    }, []);

    return (
        <Flex className="dashboard-container">
            {/* Sidebar */}
            <Box className="sidebar">
                <Text className="sidebar-title">Sidebar</Text>
                <VStack spacing="4" align="start">
					<IconButton bg="#212529"><Link to={"../"}><IoIosArrowDropleft /></Link></IconButton>
                    <Link href="#" className="sidebar-link">Dashboard</Link>
                    <Link href="#" className="sidebar-link">Orders</Link>
                    <Link href="#" className="sidebar-link">Products</Link>
                    <Link href="#" className="sidebar-link">Customers</Link>
                </VStack>
            </Box>
            {/* Main Content */}
            <Box className="content">
                <Flex className="content-row">
                    {/* Summary Box */}
                    <Box className="custom-box dark-box">
                        <Text className="box-title">Summary</Text>
                        <Text>This is the summary section. You can add details or an overview here.</Text>
                        <Button className="btn-outline">Learn More</Button>
                    </Box>
                    {/* Transcript Box */}
                    <Box className="custom-box dark-box">
                        <Text className="box-title">Transcript</Text>
                        <Text>This is the transcript section. Full details or logs can be added here.</Text>
                        <Box height="400px" flex="1" overflowY="auto" p="10px" border="1px solid #ccc" borderRadius="10px">
                            {transcript.map((message, index) => (
                                <Message key={index} text={message.text} isUser={message.isUser} />
                            ))}
						</Box>
						<Button className="btn-outline">Read More</Button>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Dashboard;
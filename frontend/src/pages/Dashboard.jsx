import React from 'react';
import { Box, Flex, Text, Button, VStack, IconButton } from "@chakra-ui/react";
import '../css/dashboard.css';
import HomePage from "./HomePage"
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Flex className="dashboard-container">
            {/* Sidebar */}
            <Box className="sidebar">
                <Text className="sidebar-title">Sidebar</Text>
                <VStack spacing="4" align="start">
					<IconButton ><Link to={"HomePage"}><IoIosArrowDropleft /></Link></IconButton>	
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
                        <Button className="btn-outline">Read More</Button>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Dashboard;
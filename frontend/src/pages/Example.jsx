import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Button, VStack, IconButton } from "@chakra-ui/react";
import '../css/dashboard.css';
import HomePage from "./HomePage"
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';
import mockData from './mockData.json';
import { LuSquareArrowOutDownRight } from "react-icons/lu";
import { BsChatDots } from "react-icons/bs";

import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
  } from "@/components/ui/menu"


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

const Menu = () => {
	return (
	  <MenuRoot>
		<MenuTrigger asChild>
		  <Button variant="solid" bg="#212529" size="lg" ml="10px">
			<Text color="white">Features</Text>
		  </Button>
		</MenuTrigger>
		<MenuContent bg="purple.200">
		  <MenuItem color="black" value="new-txt" style={{ padding: '25px', fontSize: '20px' }}>
			<span style={{ fontSize: '24px' }}>🤖</span> SMART CHATBOT FOR INITIAL SUPPORT, trained on documents, FAQs and procedures
		  </MenuItem>
		  <MenuItem color="black" value="new-file" style={{ padding: '25px', fontSize: '20px' }}>
			<span style={{ fontSize: '24px' }}>🪪</span> Scan Documents, provide Key Details and Auto-Fill Forms
		  </MenuItem>
		  <MenuItem color="black" value="new-win" style={{ padding: '25px', fontSize: '20px' }}>
			<span style={{ fontSize: '24px' }}>🧑‍💻️</span> Quick Resolution before to pass to real Agent
		  </MenuItem>
		  <MenuItem color="black" value="open-file" style={{ padding: '25px', fontSize: '20px' }}>
			<span style={{ fontSize: '24px' }}>📝</span> Smart Note-Taking and Summarization to avoid repetitions
		  </MenuItem>
		  <MenuItem color="black" value="export" style={{ padding: '25px', fontSize: '20px' }}>
			<span style={{ fontSize: '24px' }}>🚨</span> Detect Emotions of Client and Activate Emergency Chat
		  </MenuItem>
		</MenuContent>
	  </MenuRoot>
	)
  }

const Dashboard = () => {
	
	const [transcript, setTranscript] = useState([]);

	useEffect(() => {
        setTranscript(mockData.transcript);
    }, []);
 

	return (
		<Flex className="dashboard-container">
			{/* Sidebar */}
			<Box divideColor="red.200" divideY="3px" className="sidebar">
				<Text className="sidebar-title">Sidebar</Text>
				<VStack spacing="4" align="start">
					<IconButton bg="#212529"><Link to={"../"}><IoIosArrowDropleft /></Link></IconButton>
					<Link href="#" className="sidebar-link">Dashboard</Link>
					<Link href="#" className="sidebar-link">Orders</Link>
					<Link href="#" className="sidebar-link">Products</Link>
                    <Link to="../Technicals" className="sidebar-link" target="_blank">Technicals</Link> {/* Link to the PNG image */}
					<Menu />
				</VStack>
			</Box>
			{/* Main Content */}
			<Box className="content">
				<Flex className="content-row">
					{/* Summary Box */}
					<Box className="custom-box dark-box">
						<Text className="box-title">Summary</Text>
						<Text >📢 Emergency Chat: Emotions Detected</Text>
						<Text mt="5px">📃 Documents: Tax Declaration ELSTER</Text>
						<Text mt="5px"> Questions:</Text>
						<Text mt="5px">📝 FILL FORMULAR</Text>
						<Text mt="5px">📁 DETECTION EMPTY PLACES</Text>
						<Text mt="5px">🔎 PROCESS LAWS WHICH CAN BE APPLIED</Text>
						<Box mt="20px" height="400px" flex="1" overflowY="auto" p="10px" border="1px solid #ccc" borderRadius="10px">
						<Text>
						  The user is filling out their Elster tax return in Germany and needed guidance.<br />
						  They have two children 👶👶 and wanted to know about the available tax benefits, like the Kinderfreibetrag (child tax allowance) and Kindergeld (child benefit) 💰.<br />
						  Since both parents work 💼, they will file a joint tax return 👩‍💼👨‍💼 to possibly benefit from the splitting tariff for lower taxes 📉.<br />
						  They also inquired about claiming deductions for work-related expenses 💼, childcare costs 🧸, and education expenses 🎓.<br />
						  The deadline for submitting is July 31st ⏰, unless a tax advisor is used.
						</Text>
						</Box>
						<IconButton bg="blue.300" mt="10px">Continue Chat<BsChatDots /></IconButton>
					</Box>
					{/* Transcript Box */}
					<Box className="custom-box dark-box">
						<Text className="box-title">Transcript</Text>
						<Text>This is the transcript section. Full details or logs can be added here.</Text>
						<Box mt="20px" height="400px" flex="1" overflowY="auto" p="10px" border="1px solid #ccc" borderRadius="10px">
							{transcript.map((message, index) => (
                                <Message key={index} text={message.text} isUser={message.isUser} />
                            ))}
						</Box>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Dashboard;
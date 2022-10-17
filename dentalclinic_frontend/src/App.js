import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';
import { ChakraProvider, Container, Box, Flex, Center, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading } from '@chakra-ui/react'

function App() {

	return (
		<ChakraProvider>
		<Flex width="100%">
			<Box w="275px" h="100vh" bg="teal" color="white">
				<Box><Heading h>Dental Clinic</Heading></Box>
				<Accordion allowMultiple="true">
					<AccordionItem>
						<h2>
							<Link to="/dashboard">
								<AccordionButton bg="teal" border="none" color="white">
									Dashboard
								</AccordionButton>
							</Link>
						</h2>
					</AccordionItem>
					<AccordionItem>
						<h2>
							<Link to="/appointments">
								<AccordionButton border="none"  bg="teal"  color="white">
									Appointments
								</AccordionButton>
							</Link>
						</h2>
					</AccordionItem>
					<AccordionItem>
						<h2>
							<AccordionButton bg="teal" border="none" color="white">
								<Box flex="1" align="left">Patients</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={3}>
							<Box><Link to="/patients/all">All Patients</Link></Box>
							<Box><Link to="/patients/new">New Patient</Link></Box>
							<Box><Link to="/patients/search">Search</Link></Box>
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem>
						<h2>
						<AccordionButton bg="teal" border="none" color="white">
								<Box flex="1" align="left">Dentists</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel>
						<Box><Link to="/dentists/all">All Dentists</Link></Box>
							<Box><Link to="/dentists/new">New Dentist</Link></Box>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
			<Box flex="1" overflow="scroll" h="100vh">
				<Outlet />
			</Box>
		</Flex>
		</ChakraProvider>
	);
}

export default App;

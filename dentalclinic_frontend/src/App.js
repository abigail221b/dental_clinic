import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';
import { ChakraProvider, Container, Box, Flex, Center } from '@chakra-ui/react'

const dashboard = {
	PATIENTS: "Patients",
	DENTISTS: "Dentists",
	APPOINTMENTS: "Appointments"
};

function App() {

	const [selectedDashboard, setSelectedDashboard] = useState(null);

	return (
		<ChakraProvider>
			<Center>
				<Link to="patient" onClick={() => setSelectedDashboard(dashboard.PATIENTS)}>
					<Center h="50px" w="115px" bgColor={selectedDashboard === dashboard.PATIENTS? "teal": null}>{ dashboard.PATIENTS }</Center>
				</Link>
				<Link to="dentist" onClick={() => setSelectedDashboard(dashboard.DENTISTS)}>
					<Center h="50px" w="115px" bgColor={selectedDashboard === dashboard.DENTISTS? "teal": null}>{ dashboard.DENTISTS }</Center>
				</Link>
				<Link to="appointment" onClick={() => setSelectedDashboard(dashboard.APPOINTMENTS)}>
					<Center h="50px" w="115px" bgColor={selectedDashboard === dashboard.APPOINTMENTS? "teal": null}>{ dashboard.APPOINTMENTS }</Center>
				</Link>
			</Center>
			<hr />
			<Center>
				<Outlet />
			</Center>
		</ChakraProvider>
	);
}

export default App;

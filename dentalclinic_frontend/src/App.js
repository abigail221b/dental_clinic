import { Link, Outlet } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
	return (
		<ChakraProvider>
			<Link to="patient">Patients</Link>
			<Link to="dentist">Dentist</Link>
			<Link to="appointment">Appointments</Link>
			<hr />
			<Outlet />
		</ChakraProvider>
	);
}

export default App;

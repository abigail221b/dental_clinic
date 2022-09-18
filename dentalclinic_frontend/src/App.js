import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
	return (
		<>
			<Link to="patient">Patients</Link>
			<Link to="dentist">Dentist</Link>
			<Link to="appointment">Appointments</Link>
			<hr />
			<Outlet />
		</>
	);
}

export default App;

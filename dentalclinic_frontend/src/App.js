import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
	return (
		<>
			<Link to="patient">Patients</Link>
			<hr />
			<Outlet />
		</>
	);
}

export default App;

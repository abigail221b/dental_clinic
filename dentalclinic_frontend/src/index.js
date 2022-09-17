import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsDashboard from './Patients/PatientsDashboard';
import PatientsList from './Patients/PatientsList';
import NewPatientForm from './Patients/NewPatientForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <App /> }>
					<Route path="patient" element={ <PatientsDashboard />}>
						<Route path="all" element={ <PatientsList /> }/>
						<Route path="new" element={ <NewPatientForm />}/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

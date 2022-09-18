import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsDashboard from './Patients/PatientsDashboard';
import PatientsList from './Patients/PatientsList';
import NewPatientForm from './Patients/NewPatientForm';
import PatientDetail from './Patients/PatientDetail';
import UpdatePatientForm from './Patients/UpdatePatientForm';
import DentistDashboard from "./Dentists/DentistDashboard";
import DentistList from './Dentists/DentistList';
import NewDentistForm from "./Dentists/NewDentistForm";
import UpdateDentistForm from './Dentists/UpdateDentistForm';
import DentistDetail from './Dentists/DentistDetail';
import AppointmentDashboard from './Appointments/AppointmentDashboard';
import NewAppointmentForm from "./Appointments/NewAppointmentForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <App /> }>
					<Route path="patient" element={ <PatientsDashboard />}>
						<Route path="all" element={ <PatientsList /> }/>
						<Route path="new" element={ <NewPatientForm />}/>
						<Route path=":id" element={ <PatientDetail /> } />
						<Route path="update/:id" element={ <UpdatePatientForm /> } />
					</Route>
					<Route path="dentist" element={ <DentistDashboard /> }>
						<Route path="all" element={ <DentistList /> } />
						<Route path="new" element={ <NewDentistForm /> } />
						<Route path=":id" element={ <DentistDetail /> } />
						<Route path="update/:id" element={ <UpdateDentistForm />}/>
					</Route>
					<Route path="appointment" element={ <AppointmentDashboard/> }>
						<Route path="new" element={ <NewAppointmentForm />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

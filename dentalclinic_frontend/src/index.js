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
import SearchPatient from './Patients/SearchPatient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <App /> }>
					<Route index element={<AppointmentDashboard/>} />
					<Route path="patients/all" element={ <PatientsList /> }/>
					<Route path="patients/new" element={ <NewPatientForm />}/>
					<Route path="patients/search" element={ <SearchPatient /> } />
					<Route path="patients/:id" element={ <PatientDetail /> } />
					<Route path="patients/:id/update-form" element={ <UpdatePatientForm /> } />		
					<Route path="patients/:id/appointment-form" element={ <NewAppointmentForm /> } />				
					<Route path="dentists/all" element={ <DentistList /> } />
					<Route path="dentists/new" element={ <NewDentistForm /> } />
					<Route path="dentists/:id" element={ <DentistDetail /> } />
					<Route path="dentists/:id/update-form" element={ <UpdateDentistForm />}/>
					<Route path="appointments" element={ <AppointmentDashboard/> } />
					<Route path="*" element={<div>dashboard</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

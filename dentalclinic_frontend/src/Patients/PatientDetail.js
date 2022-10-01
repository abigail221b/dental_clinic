import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientDetail = () => {
    const [patient, setPatient] = useState({});
    const { id } = useParams();
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/patients/${ id }`)
        .then(res => res.json())
        .then(patient => setPatient(patient));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8080/appointments/?patientID=${ id }&after=${ new Date().toLocaleDateString("en-CA", {year: "numeric", month: "numeric", day: "numeric"}) }`)
        .then(res => res.json())
        .then(upcomingAppointments => setUpcomingAppointments(upcomingAppointments));
    }, []);

    return (
        <>
            <span>{patient.id} {patient.firstName} {patient.lastName} {patient.dateOfBirth} {patient.address} {patient.phoneNumber}</span>
            <Link to={{ pathname: `/patient/${ id }/update-form`}}> Update </Link>
            <Link to={{ pathname: `/patient/${ id }/appointment-form`}}> Book Appointment </Link>

            <h2>Upcoming Appointments</h2>
            { upcomingAppointments.map(appointment => <p>{appointment.id.patient.firstName} 
                                                         {appointment.id.patient.lastName}  
                                                         {appointment.id.date} 
                                                         {appointment.id.startTime} 
                                                         Dr. {appointment.dentist.lastName}</p>) }
        </>
    );
}

export default PatientDetail;
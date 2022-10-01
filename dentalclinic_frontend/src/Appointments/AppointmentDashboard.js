import { useState, useEffect } from "react";

const AppointmentDashboard = () => {

    const [date, setDate] = useState(new Date()
                                        .toLocaleDateString("en-CA", {
                                                        year: "numeric",
                                                        month: "numeric",
                                                        day: "numeric"
                                                    }));
    const [dentists, setDentists] = useState([]);
    const [selectedDentistID, setSelectedDentistID] = useState(null);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
        .then(res => res.json())
        .then(dentists => {
            setSelectedDentistID(dentists[0].id);
            setDentists(dentists);
        });
    }, []);

    useEffect(() => {
        if(selectedDentistID !== null) {
            fetch(`http://localhost:8080/appointments/?date=${ date }&dentistID=${ selectedDentistID }`)
            .then(res => res.json())
            .then(appointments => setAppointments(appointments));
        }
    }, [date, selectedDentistID]);

    return (
        <>
            <input type="date" 
                   onChange={(e) => setDate(e.target.value) }
                   value={ date }/>
            
            <select value={selectedDentistID} onChange={(e) => setSelectedDentistID(e.target.value)}>
                { dentists.map(dentist => <option value={ dentist.id }> Dr. {dentist.firstName} {dentist.lastName}</option>) }
            </select>

            { appointments.map(appointment => 
                    <p>{appointment.id.patient.firstName} 
                    {appointment.id.patient.lastName}  
                    {appointment.id.date} 
                    {appointment.id.startTime} 
                    Dr. {appointment.dentist.lastName}</p>) }
        </>
    );
}

export default AppointmentDashboard;
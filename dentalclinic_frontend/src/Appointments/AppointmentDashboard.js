import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Th
  } from '@chakra-ui/react'

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
        fetch("http://localhost:8080/dentist")
        .then(res => res.json())
        .then(dentists => {
            setSelectedDentistID(dentists[0].id);
            setDentists(dentists);
        });
    }, []);

    useEffect(() => {
        if(selectedDentistID !== null) {
            fetch(`http://localhost:8080/appointment/?date=${ date }&dentistID=${ selectedDentistID }`)
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
            { appointments.length > 0?
                <TableContainer>
                    <Table variant="striped" colorScheme="green">
                        <Thead>
                            <Tr>
                                <Th>Patient First Name</Th>
                                <Th>Patient Last Name</Th>
                                <Th>Date</Th>
                                <Th>Start Time</Th>
                                <Th>Dentist</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
            { appointments.map(appointment => 
                                <Tr>
                                    <Td>{appointment.id.patient.firstName}</Td>
                                    <Td>{appointment.id.patient.lastName}</Td>
                                    <Td>{appointment.id.date}</Td>
                                    <Td>{appointment.id.startTime}</Td>
                                    <Td>Dr. {appointment.dentist.lastName}</Td>
                                    <Td>Cancel</Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer> : <p>No Appointments</p>
            }
        </>
    );
}

export default AppointmentDashboard;
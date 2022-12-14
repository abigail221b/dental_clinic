import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Select,
    Input,
    Flex,
    Th,
    Container,
    Center,
    Button
  } from '@chakra-ui/react'
import AppointmentRow from "./AppointmentRow";

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
        <div>
            <Flex gap="20px" h="50px" p="10px">
                <Input type="date" 
                    w="200px"
                    onChange={(e) => setDate(e.target.value) }
                    value={ date }/>
                
                <Select w="250px" value={selectedDentistID} onChange={(e) => setSelectedDentistID(e.target.value)}>
                    { dentists.map(dentist => <option value={ dentist.id }> Dr. {dentist.firstName} {dentist.lastName}</option>) }
                </Select>
            </Flex>
            <Container  maxWidth="container.xl">
                { appointments.length > 0?
                    <TableContainer>
                        <Table variant="striped" colorScheme="green">
                            <Thead>
                                <Tr>
                                    <Th>Patient First Name</Th>
                                    <Th>Patient Last Name</Th>
                                    <Th>Date</Th>
                                    <Th>Start Time</Th>
                                    <Th>Duration</Th>
                                    <Th>Description</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { appointments.map(appointment => <AppointmentRow 
                                                                        patientID={appointment.id.patient.id}
                                                                        patientFN={appointment.id.patient.firstName}
                                                                        patientLN={appointment.id.patient.lastName}
                                                                        date={appointment.id.date}
                                                                        startTime={appointment.id.startTime}
                                                                        dentistFN={ null }
                                                                        dentistLN={ null }
                                                                        duration={appointment.duration}
                                                                        description={appointment.description}
                                                                        setAppointments={setAppointments} />) }
                            </Tbody>
                        </Table>
                    </TableContainer> : null
                }
            </Container>
        </div>
    );
}

export default AppointmentDashboard;
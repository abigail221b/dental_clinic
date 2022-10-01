import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heading, TableContainer, Table, Tbody, Thead, Tr, Th, Td, Input, Flex, Box, Text, Button } from "@chakra-ui/react";

const PatientDetail = () => {
    const [patient, setPatient] = useState({});
    const { id } = useParams();
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/patient/${ id }`)
        .then(res => res.json())
        .then(patient => setPatient(patient));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8080/appointment/?patientID=${ id }&after=${ new Date().toLocaleDateString("en-CA", {year: "numeric", month: "numeric", day: "numeric"}) }`)
        .then(res => res.json())
        .then(upcomingAppointments => setUpcomingAppointments(upcomingAppointments));
    }, []);

    return (
        <>
            <Heading>Patient Information</Heading>
            <Flex gap="10px" pt="10px" pb="20px">
                <Button colorScheme="teal"><Link to={{ pathname: `/patient/${ id }/update-form`}}> Update Patient </Link></Button>
                <Button colorScheme="teal"><Link to={{ pathname: `/patient/${ id }/appointment-form`}}> Book Appointment </Link></Button>
            </Flex>

            <Box w="500px">
                <Text fontSize="xl">First Name: { patient.firstName }</Text>
                <Text fontSize="xl">Last Name: { patient.lastName }</Text>
                <Text fontSize="xl">Date of Birth: { patient.dateOfBirth }</Text>
                <Text fontSize="xl">Address: { patient.address }</Text>
                <Text fontSize="xl">Phone: { patient.phoneNumber }</Text>
            </Box>
            <br />
            <Heading as="h3" size="lg">Upcoming Appointments</Heading>
            { upcomingAppointments.length > 0?
                <TableContainer>
                    <Table variant="striped">
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Time</Th>
                                <Th>Dentist</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { upcomingAppointments.map(appointment => 
                                    <Tr>
                                        <Td>{appointment.id.date} </Td>
                                        <Td>{appointment.id.startTime} </Td>
                                        <Td>Dr. {appointment.dentist.lastName}</Td>
                                    </Tr>) }
                        </Tbody>
                    </Table>
                </TableContainer> : ""
            }
        </>
    );
}

export default PatientDetail;
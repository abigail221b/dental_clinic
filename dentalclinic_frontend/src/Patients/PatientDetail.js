import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heading, TableContainer, Table, Tbody, Thead, Tr, Th, Td, Input, Flex, Box, Text, Button } from "@chakra-ui/react";

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
        <div>
            <Heading>Patient Information</Heading>
            <Flex gap="10px" pt="10px" pb="20px">
                <Link to={{ pathname: `/patient/${ id }/update-form`}}><Button colorScheme="teal">Update Patient</Button></Link>
                <Link to={{ pathname: `/patient/${ id }/appointment-form`}}><Button colorScheme="teal">Book Appointment</Button></Link>
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
                                <Th>Duration</Th>
                                <Th>Description</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { upcomingAppointments.map(appointment => 
                                    <Tr>
                                        <Td>{appointment.id.date} </Td>
                                        <Td>{appointment.id.startTime} </Td>
                                        <Td>Dr. {appointment.dentist.lastName}</Td>
                                        <Td>{appointment.duration} mins</Td>
                                        <Td>{appointment.description}</Td>
                                        <Td>
                                            <Flex gap="5px">
                                                <Button colorScheme="teal" size="xs">Update</Button>
                                                <Button colorScheme="teal" size="xs">Cancel</Button>
                                            </Flex>
                                        </Td>
                                    </Tr>) }
                        </Tbody>
                    </Table>
                </TableContainer> : ""
            }
        </div>
    );
}

export default PatientDetail;
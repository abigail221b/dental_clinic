import { useState, useEffect } from "react";
import PatientRow from "./PatientRow";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer
  } from '@chakra-ui/react'

const PatientsList = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/patients")
        .then(res => res.json())
        .then(patients => setPatients(patients));
    }, []);

    return (
        <TableContainer>
            <Table variant="striped" colorScheme="green">
                <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Date of Birth</Th>
                        <Th>Address</Th>
                        <Th>Phone Number</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { patients.map(patient => <PatientRow id={patient.id} 
                                                        firstName={patient.firstName} 
                                                        lastName={patient.lastName} 
                                                        dateOfBirth={patient.dateOfBirth} 
                                                        address={patient.address} 
                                                        phoneNumber={patient.phoneNumber} 
                                                        setPatients={setPatients}/>) }
                </Tbody>
                
            </Table>
            
        </TableContainer>
    );
}

export default PatientsList;
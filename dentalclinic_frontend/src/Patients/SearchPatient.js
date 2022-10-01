import { useState } from "react";
import SearchPatientForm from "./SearchPatientForm";
import PatientRow from "./PatientRow";
import { 
    TableContainer, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th
} from "@chakra-ui/react";

const SearchPatient = () => {

    const [patients, setPatients] = useState([]);

    return (
        <div>
            <SearchPatientForm setPatients={setPatients}/>

            { patients.length > 0?
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
                                                        phoneNumber={patient.phoneNumber} />) }
                        </Tbody>
                    </Table>
                </TableContainer> : ""
            }   
        </div>
    );
}

export default SearchPatient;
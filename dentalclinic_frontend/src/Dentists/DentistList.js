import { useEffect, useState } from "react";
import DentistRow from "./DentistRow";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Th
  } from '@chakra-ui/react'

const DentistList = () => {

    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
        .then(res => res.json())
        .then(dentists => setDentists(dentists));
    }, []);

    return (
        <TableContainer>
            <Table variant="striped" colorScheme="green">
            <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Phone Number</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { dentists.map(dentist => <DentistRow id={dentist.id} 
                                                    firstName={dentist.firstName}
                                                    lastName={dentist.lastName}
                                                    phoneNumber={dentist.phoneNumber} />)}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default DentistList;
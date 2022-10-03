import { Link, Outlet } from "react-router-dom";
import { Tr, Td, Flex, Button } from '@chakra-ui/react'

const PatientRow = ({ id, firstName, lastName, dateOfBirth, address, phoneNumber, setPatients}) => {

    const handleDelete = () => {
        fetch(`http://localhost:8080/patients/${ id }`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.status === 200)
                setPatients(patients => patients.filter( patient => patient.id !== id ));
        });
    }

    return (
        <Tr>
            <Td>{ firstName }</Td>
            <Td>{ lastName }</Td>
            <Td>{ dateOfBirth }</Td>
            <Td>{ address }</Td>
            <Td>{ phoneNumber }</Td>
            <Td>
                <Flex gap="5px">
                    <Link to={{ pathname: `/patient/${ id }`}}>
                        <Button colorScheme="teal" size="xs">View</Button>
                    </Link>
                    <Link to={{ pathname: `/patient/${ id }/update-form`}}>
                        <Button colorScheme="teal" size="xs">Update</Button>
                    </Link>
                    <Link to={{ pathname: `/patient/${ id }/appointment-form`}}>
                        <Button colorScheme="teal" size="xs">Book Appointment</Button>
                    </Link>
                    <Button colorScheme="teal" size="xs" onClick={() => handleDelete()}>Delete</Button>
                </Flex>
            </Td>
        </Tr>
    );
}

export default PatientRow;
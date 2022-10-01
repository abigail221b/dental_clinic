import { Link, Outlet } from "react-router-dom";
import { Tr, Td } from '@chakra-ui/react'

const PatientRow = ({ id, firstName, lastName, dateOfBirth, address, phoneNumber}) => {
    return (
        <Tr>
            <Td>{ firstName }</Td>
            <Td>{ lastName }</Td>
            <Td>{ dateOfBirth }</Td>
            <Td>{ address }</Td>
            <Td>{ phoneNumber }</Td>
            <Td>
                <Link to={{ pathname: `/patient/${ id }`}}> View </Link>
                <Link to={{ pathname: `/patient/${ id }/update-form`}}> Update </Link>
                <Link to={{ pathname: `/patient/${ id }/appointment-form`}}> Book Appointment </Link>
                </Td>
        </Tr>
    );
}

export default PatientRow;
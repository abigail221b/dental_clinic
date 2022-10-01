import { Link } from "react-router-dom";
import { Tr, Td } from '@chakra-ui/react'

const DentistRow = ({id, firstName, lastName, phoneNumber}) => {
    return (
        <Tr>
            <Td>{ firstName }</Td>
            <Td>{ lastName }</Td>
            <Td>{ phoneNumber }</Td>
            <Td>
                <Link to={{ pathname: `/dentist/${id}` }}>View</Link>
                <Link to={{ pathname: `/dentist/${id}/update-form` }}>Edit</Link>
            </Td>
        </Tr>
    );
}

export default DentistRow;
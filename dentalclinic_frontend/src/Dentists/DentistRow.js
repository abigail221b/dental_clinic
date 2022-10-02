import { Link } from "react-router-dom";
import { Tr, Td, Flex, Button } from '@chakra-ui/react'

const DentistRow = ({id, firstName, lastName, phoneNumber}) => {
    return (
        <Tr>
            <Td>{ firstName }</Td>
            <Td>{ lastName }</Td>
            <Td>{ phoneNumber }</Td>
            <Td>
                <Flex gap="5px">
                    <Link to={{ pathname: `/dentist/${id}` }}>
                        <Button colorScheme="teal" size="xs">View</Button>
                    </Link>
                    <Link to={{ pathname: `/dentist/${id}/update-form` }}>
                        <Button colorScheme="teal" size="xs">Update</Button>
                    </Link>
                </Flex>
            </Td>
        </Tr>
    );
}

export default DentistRow;
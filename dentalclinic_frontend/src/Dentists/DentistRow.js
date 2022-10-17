import { Link } from "react-router-dom";
import { Tr, Td, Flex, Button } from '@chakra-ui/react'

const DentistRow = ({id, firstName, lastName, phoneNumber, setDentists}) => {

    const handleDelete = () => {
        fetch(`http://localhost:8080/dentists/${ id }`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.status === 200)
                setDentists(dentists => dentists.filter( dentist => dentist.id !== id ));
            
            return res.text();
        })
        .then(res => console.log(res));
    }

    return (
        <Tr>
            <Td>{ firstName }</Td>
            <Td>{ lastName }</Td>
            <Td>{ phoneNumber }</Td>
            <Td>
                <Flex gap="5px">
                    <Link to={{ pathname: `/dentists/${id}` }}>
                        <Button colorScheme="teal" size="xs">View</Button>
                    </Link>
                    <Link to={{ pathname: `/dentists/${id}/update-form` }}>
                        <Button colorScheme="teal" size="xs">Update</Button>
                    </Link>
                    <Button colorScheme="teal" size="xs" onClick={() => handleDelete()}>Delete</Button>
                </Flex>
            </Td>
        </Tr>
    );
}

export default DentistRow;
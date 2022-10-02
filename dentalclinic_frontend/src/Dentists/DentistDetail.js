import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Heading, Flex, Text, Box, Button } from "@chakra-ui/react";

const DentistDetail = () => {

    const [dentist, setDentist] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/dentists/${ id }`)
        .then(res => res.json())
        .then(dentist => setDentist(dentist));
    }, []);

    return (
        <div>
            <Heading>Dentist Information</Heading>
            <Flex gap="10px" pt="10px" pb="20px">
                <Link to={{ pathname: `/dentist/${dentist.id}/update-form` }}><Button colorScheme="teal">Edit</Button></Link>
            </Flex>

            <Box w="500px">
                <Text fontSize="xl">First Name: { dentist.firstName }</Text>
                <Text fontSize="xl">Last Name: { dentist.lastName }</Text>
                <Text fontSize="xl">Phone: { dentist.phoneNumber }</Text>
            </Box>
        </div>
    );
}

export default DentistDetail;
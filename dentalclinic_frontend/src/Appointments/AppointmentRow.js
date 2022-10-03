import { Tr, Td, Flex, Button } from "@chakra-ui/react";

const AppointmentRow = ({ patientFN, patientLN, date, startTime, dentistFN, dentistLN, duration, description }) => {
    return (
        <Tr>
            { patientFN !== null || patientLN !== null? 
                <>
                    <Td>{ patientFN }</Td>
                    <Td>{ patientLN}</Td>
                </> : ""
            }
            
            <Td>{ date }</Td>
            <Td>{ startTime }</Td>

            { dentistFN !== null || dentistLN !== null?
                <Td>Dr { dentistFN } { dentistLN }</Td> : ""
            }
            
            <Td>{ duration }</Td>
            <Td>{ description }</Td>

            <Td>
                <Flex gap="5px">
                    <Button colorScheme="teal" size="xs">Update</Button>
                    <Button colorScheme="teal" size="xs">Cancel</Button>
                </Flex>
            </Td>
        </Tr>
    );
}

export default AppointmentRow;
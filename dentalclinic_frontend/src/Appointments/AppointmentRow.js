import { Tr, Td, Flex, Button } from "@chakra-ui/react";

const AppointmentRow = ({ patientID, patientFN, patientLN, date, startTime, dentistFN, dentistLN, duration, description, setAppointments }) => {
    
    const handleDelete = () => {
        fetch(`http://localhost:8080/appointments`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                patientID: patientID,
                date: date,
                startTime: startTime
            })
        })
        .then(res => {
            if(res.status === 200)
                setAppointments(appointments => appointments.filter(appointment => appointment.id.patient.id !== patientID && appointment.id.date !== date && appointment.id.startTime !== startTime));

            return res.text();
        })
        .then(res => console.log(res));
    }
    
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
                    <Button colorScheme="teal" size="xs" onClick={ handleDelete }>Cancel</Button>
                </Flex>
            </Td>
        </Tr>
    );
}

export default AppointmentRow;
import { Input, Select, Button, Heading, FormControl, FormLabel, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewAppointmentForm = () => {

    const [appointment, setAppointment] = useState({});
    const { id } = useParams();
    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentist")
        .then(res => res.json())
        .then(dentists => {
            setDentists(dentists);
            setAppointment(appointment => {
                return {...appointment, dentistID: dentists[0].id}
            });
        });
    }, []);

    useEffect(() => {
        setAppointment(appointment => { 
            return {
                ...appointment, 
                id: {
                    ...appointment.id, 
                    patientID: id } 
                }
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        });
    }

    return (
        <>
            <Heading>New Appointment</Heading>
            <form style={{ width: "500px"}}>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Select a Dentist</FormLabel>
                    <Select onChange={(e) => setAppointment(appointment => { return {...appointment, dentistID: e.target.value }})} >
                        { dentists.map(dentist => <option value={dentist.id}> Dr. {dentist.firstName} {dentist.lastName} </option>) }
                    </Select>
                </FormControl>
                <Flex>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">Appointment Date</FormLabel>
                        <Input type="date"
                            onChange={(e) => setAppointment(appointment => { 
                                                                    return {
                                                                        ...appointment, 
                                                                        id: {
                                                                            ...appointment.id,
                                                                            date: e.target.value
                                                                        }
                                                                    }})} />
                    </FormControl>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">Time</FormLabel>
                        <Input type="time" 
                            onChange={(e) => setAppointment(appointment => {
                                                                return {
                                                                    ...appointment, 
                                                                    id: {
                                                                        ...appointment.id,
                                                                        startTime: e.target.value
                                                                    }
                                                                }})} />
                    </FormControl>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">Duration</FormLabel>
                        <Input type="number" onChange={(e) => setAppointment(appointment => { return {...appointment, duration: e.target.value }})}/>
                    </FormControl>
                </Flex>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Description</FormLabel>
                    <Input type="text" placeholder="description" onChange={(e) => setAppointment(appointment => { return {...appointment, description: e.target.value }})}/>
                </FormControl>
                
                <Button colorScheme="teal" onClick={(e) => handleSubmit(e) }>Submit</Button>
            </form>
        </>
    );

}

export default NewAppointmentForm;
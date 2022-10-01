import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"

const UpdatePatientForm = () => {

    const [patient, setPatient] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/patient/${ id }`)
        .then(res => res.json())
        .then(patient => setPatient(patient));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/patient`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        });
    }

    return (
        <div>
            <Heading>Update Patient</Heading>
            <form style={{ width: "500px" }}>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">First Name</FormLabel>
                    <Input type="text" value={patient.firstName} onChange={(e) => setPatient(patient => { return {...patient, firstName: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Last Name</FormLabel>
                    <Input type="text" value={patient.lastName} onChange={(e) => setPatient(patient => { return {...patient, lastName: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Date of Birth</FormLabel>
                    <Input type="date" value={patient.dateOfBirth} onChange={(e) => setPatient(patient => { return {...patient, dateOfBirth: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Address</FormLabel>
                    <Input type="text" value={patient.address} onChange={(e) => setPatient(patient => { return {...patient, address: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Phone number</FormLabel>
                    <Input type="text" value={patient.phoneNumber} onChange={(e) => setPatient(patient => { return {...patient, phoneNumber: e.target.value }}) } />
                </FormControl>
                <Button colorScheme="teal" onClick={ (e) => handleSubmit(e) }>Submit</Button>
            </form>
        </div> 
    );
}

export default UpdatePatientForm;
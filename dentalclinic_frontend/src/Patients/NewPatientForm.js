import { useState } from "react";
import { Input, Button, FormLabel, FormControl, Heading } from "@chakra-ui/react";

const NewPatientForm = () => {

    const [patient, setPatient] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:8080/patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        });
    }

    return (
        <>
            <Heading>New Patient</Heading>
            <form style={{ width: "500px"}}>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">First name</FormLabel>
                    <Input type="text" placeholder="First Name"   onChange={(e) => setPatient(patient => { return {...patient, firstName: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Last name</FormLabel>
                    <Input type="text" placeholder="Last Name"    onChange={(e) => setPatient(patient => { return {...patient, lastName: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Date of Birth</FormLabel>
                    <Input type="date" onChange={(e) => setPatient(patient => { return {...patient, dateOfBirth: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Address</FormLabel>
                    <Input type="text" placeholder="Address"      onChange={(e) => setPatient(patient => { return {...patient, address: e.target.value }}) } />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Phone number</FormLabel>
                    <Input type="text" placeholder="Phone Number" onChange={(e) => setPatient(patient => { return {...patient, phoneNumber: e.target.value }}) } />
                </FormControl>
                <Button colorScheme="teal" onClick={ (e) => handleSubmit(e) }>Submit</Button>
            </form>
        </>
    );
}

export default NewPatientForm;
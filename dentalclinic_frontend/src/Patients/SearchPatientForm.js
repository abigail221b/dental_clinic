import { useState } from "react";
import { Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

const SearchPatientForm = ({ setPatients }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let firstNameQuery = firstName.length > 0? `firstName=${firstName}` : "";
        let lastNameQuery = lastName.length > 0? `&lastName=${lastName}` : "";
        let dateOfBirthQuery = dateOfBirth.value? `&dateOfBirth=${dateOfBirth}` : "";
        let phoneNumberQuery = phoneNumber.length > 0? `&phoneNumber=${phoneNumber}` : ""; 

        fetch(`http://localhost:8080/patient/?${firstNameQuery}${lastNameQuery}${dateOfBirthQuery}${phoneNumberQuery}`)
        .then(res => res.json())
        .then(patients => setPatients(patients));

    }

    return (
        <div>
            <Heading>Search Patient</Heading>
            <p>Fill in at least one field.</p>
                <form style={{ width: "500px" }}>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">First Name</FormLabel>
                        <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </FormControl>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">Last Name</FormLabel>
                        <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </FormControl>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">Date of Birth</FormLabel>
                        <Input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                    </FormControl>
                    <FormControl pb="20px">
                        <FormLabel fontWeight="bold">Phone number</FormLabel>
                        <Input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </FormControl>
                    
                    <Button colorScheme="teal" onClick={(e) => handleSubmit(e)}>Search</Button>
                </form>
        </div>
    );
}

export default SearchPatientForm;
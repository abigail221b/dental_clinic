import { useState } from "react";
import { Input, Button, Heading, FormControl, FormLabel } from "@chakra-ui/react";

const NewDentistForm = () => {

    const [dentist, setDentist] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/dentists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dentist)
        });
    }

    return (
        <div>
            <Heading>New Dentist</Heading>
            <form style={{ width: "500px"}}>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">First Name</FormLabel>
                    <Input type="text" onChange={(e) => setDentist(dentist => { return {...dentist, firstName: e.target.value }})} />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Last Name</FormLabel>
                    <Input type="text" onChange={(e) => setDentist(dentist => {return {...dentist, lastName: e.target.value }})}/>
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Phone number</FormLabel>
                    <Input type="text" onChange={(e) => setDentist(dentist => {return {...dentist, phoneNumber: e.target.value }})}/>
                </FormControl>
                <Button colorScheme="teal" onClick={ (e) => handleSubmit(e) }>Submit</Button>
            </form>
        </div>
    );
}

export default NewDentistForm;
import { useState } from "react";
import { Input, Button, Heading, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewDentistForm = () => {

    const [dentist, setDentist] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/dentists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dentist)
        })
        .then(res => res.json())
        .then(dentist => navigate(`/dentist/${ dentist.id }`));
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
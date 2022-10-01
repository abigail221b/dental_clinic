import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const UpdateDentistForm = () => {

    const [dentist, setDentist] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/dentist/${ id }`)
        .then(res => res.json())
        .then(dentist => setDentist(dentist));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/dentist", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dentist)
        });
    }

    return (
        <div>
            <Heading>Update Dentist</Heading>
            <form style={{ width: "500px" }}>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">First Name</FormLabel>
                    <Input type="text" value={dentist.firstName} onChange={(e) => setDentist(dentist => { return {...dentist, firstName: e.target.value }})} />
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Last Name</FormLabel>
                    <Input type="text" value={dentist.lastName} onChange={(e) => setDentist(dentist => {return {...dentist, lastName: e.target.value }})}/>
                </FormControl>
                <FormControl pb="20px">
                    <FormLabel fontWeight="bold">Phone number</FormLabel>
                    <Input type="text" value={dentist.phoneNumber} onChange={(e) => setDentist(dentist => {return {...dentist, phoneNumber: e.target.value }})}/>
                </FormControl>
                <Button colorScheme="teal" onClick={ (e) => handleSubmit(e) }>Update</Button>
            </form>
        </div>
    );
}

export default UpdateDentistForm;
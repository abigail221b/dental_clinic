import { useState } from "react";

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
        <form>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Search</button>
        </form>
    );
}

export default SearchPatientForm;
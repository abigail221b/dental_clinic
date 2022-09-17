import { useState } from "react";

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
        <form>
            <input type="text" placeholder="First Name"   onChange={(e) => setPatient(patient => { return {...patient, firstName: e.target.value }}) } />
            <input type="text" placeholder="Last Name"    onChange={(e) => setPatient(patient => { return {...patient, lastName: e.target.value }}) } />
            <input type="date"                            onChange={(e) => setPatient(patient => { return {...patient, dateOfBirth: e.target.value }}) } />
            <input type="text" placeholder="Address"      onChange={(e) => setPatient(patient => { return {...patient, address: e.target.value }}) } />
            <input type="text" placeholder="Phone Number" onChange={(e) => setPatient(patient => { return {...patient, phoneNumber: e.target.value }}) } />
            <button onClick={ (e) => handleSubmit(e) }>Submit</button>
        </form>
    );
}

export default NewPatientForm;
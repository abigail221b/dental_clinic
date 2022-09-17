import { useState, useEffect } from "react";

const PatientsList = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/patient")
        .then(res => res.json())
        .then(patients => setPatients(patients));
    }, []);

    return (
        <>
            { patients.map(patient => <p> {patient.id} 
                                            {patient.firstName} 
                                            {patient.lastName} 
                                            {patient.dateOfBirth} 
                                            {patient.address} 
                                            {patient.phoneNumber}</p>) }
        </>
    );
}

export default PatientsList;
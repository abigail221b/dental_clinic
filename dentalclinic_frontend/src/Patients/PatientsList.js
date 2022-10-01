import { useState, useEffect } from "react";
import PatientRow from "./PatientRow";

const PatientsList = () => {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/patients")
        .then(res => res.json())
        .then(patients => setPatients(patients));
    }, []);

    return (
        <>
            { patients.map(patient => <PatientRow id={patient.id} 
                                                  firstName={patient.firstName} 
                                                  lastName={patient.lastName} 
                                                  dateOfBirth={patient.dateOfBirth} 
                                                  address={patient.address} 
                                                  phoneNumber={patient.phoneNumber} />) }
        </>
    );
}

export default PatientsList;
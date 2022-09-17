import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientDetail = () => {
    const [patient, setPatient] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/patient/${ id }`)
        .then(res => res.json())
        .then(patient => setPatient(patient));
    }, [id]);

    return (
        <>
            <span>{patient.id} {patient.firstName} {patient.lastName} {patient.dateOfBirth} {patient.address} {patient.phoneNumber}</span>
            <Link to={{ pathname: `/patient/update/${ id }` }}>Update</Link>
        </>
    );
}

export default PatientDetail;
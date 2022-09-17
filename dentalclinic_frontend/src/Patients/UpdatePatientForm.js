import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdatePatientForm = () => {

    const [patient, setPatient] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/patient/${ id }`)
        .then(res => res.json())
        .then(patient => setPatient(patient));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/patient`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        });
    }

    return (
        <form>
            <input type="text"  value={patient.firstName} onChange={(e) => setPatient(patient => { return {...patient, firstName: e.target.value }}) } />
            <input type="text" value={patient.lastName} onChange={(e) => setPatient(patient => { return {...patient, lastName: e.target.value }}) } />
            <input type="date" value={patient.dateOfBirth} onChange={(e) => setPatient(patient => { return {...patient, dateOfBirth: e.target.value }}) } />
            <input type="text" value={patient.address} onChange={(e) => setPatient(patient => { return {...patient, address: e.target.value }}) } />
            <input type="text" value={patient.phoneNumber} onChange={(e) => setPatient(patient => { return {...patient, phoneNumber: e.target.value }}) } />
            <button onClick={ (e) => handleSubmit(e) }>Submit</button>
        </form>
    );
}

export default UpdatePatientForm;
import { useState } from "react";
import SearchPatientForm from "./SearchPatientForm";
import PatientRow from "./PatientRow";

const SearchPatient = () => {

    const [patients, setPatients] = useState([]);

    return (
        <>
            <SearchPatientForm setPatients={setPatients}/>

            { patients.map(patient => <PatientRow id={patient.id} 
                                                  firstName={patient.firstName} 
                                                  lastName={patient.lastName} 
                                                  dateOfBirth={patient.dateOfBirth} 
                                                  address={patient.address} 
                                                  phoneNumber={patient.phoneNumber} />) }
        </>
    );
}

export default SearchPatient;
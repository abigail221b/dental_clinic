import { useState, useEffect } from "react";

const AppointmentDashboard = () => {

    const [date, setDate] = useState(new Date()
                                        .toLocaleDateString("en-CA", {
                                                        year: "numeric",
                                                        month: "numeric",
                                                        day: "numeric"
                                                    }));
    const [dentists, setDentists] = useState([]);
    const [selectedDentistID, setSelectedDentistID] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/dentist")
        .then(res => res.json())
        .then(dentists => {
            setDentists(dentists);
            setSelectedDentistID(dentists[0].id);
        });
    }, []);

    return (
        <>
            <input type="date" 
                   onChange={(e) => setDate(e.target.value) }
                   value={ date }/>
            
            <select value={selectedDentistID} onChange={(e) => setSelectedDentistID(e.target.value)}>
                { dentists.map(dentist => <option value={ dentist.id }> Dr. {dentist.firstName} {dentist.lastName}</option>) }
            </select>
        </>
    );
}

export default AppointmentDashboard;
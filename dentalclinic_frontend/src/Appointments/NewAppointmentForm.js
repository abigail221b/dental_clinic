import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewAppointmentForm = () => {

    const [appointment, setAppointment] = useState({});
    const { id } = useParams();
    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentist")
        .then(res => res.json())
        .then(dentists => {
            setDentists(dentists);
            setAppointment(appointment => {
                return {...appointment, dentistID: dentists[0].id}
            });
        });
    }, []);

    useEffect(() => {
        setAppointment(appointment => { 
            return {
                ...appointment, 
                id: {
                    ...appointment.id, 
                    patientID: id } 
                }
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        });
    }

    return (
        <form>
            <select>
                { dentists.map(dentist => <option value={dentist.id}
                                                  onChange={(e) => setAppointment(appointment => { return {...appointment, dentistID: e.target.value }})} >
                                            Dr. {dentist.firstName} {dentist.lastName}
                                          </option>) }
            </select>
            <input type="date" 
                   onChange={(e) => setAppointment(appointment => { 
                                                        return {
                                                            ...appointment, 
                                                            id: {
                                                                ...appointment.id,
                                                                date: e.target.value
                                                            }
                                                        }
                                                    })} />
            <input type="time" 
                   onChange={(e) => setAppointment(appointment => {
                                                        return {
                                                            ...appointment, 
                                                            id: {
                                                                ...appointment.id,
                                                                startTime: e.target.value
                                                            }
                                                        }
                                                    })} />
            <input type="number" onChange={(e) => setAppointment(appointment => { return {...appointment, duration: e.target.value }})}/>
            <input type="text" placeholder="description" onChange={(e) => setAppointment(appointment => { return {...appointment, description: e.target.value }})}/>
            <button onClick={(e) => handleSubmit(e) }>Submit</button>
        </form>
    );

}

export default NewAppointmentForm;
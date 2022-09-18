import { useEffect } from "react";
import { useParams } from "react-router-dom";

const NewAppointmentForm = () => {

    const [appointment, setAppointment] = useState({});
    const { patientID } = useParams();
    const [dentists, setDentists] = useState([]);
    const [selectedDentist, setSelectedDentist] = useState(null);

    useEffect(() => {
        setAppointment(appointment => { return {...appointment, patientID: patientID }});

        fetch("http://localhost:8080/dentist")
        .then(dentists => setDentists(dentists));
    }, [patientID]);

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
            <input type="date" onChange={(e) => setAppointment(appointment => {return {...appointment, date: e.target.value }})}/>
            <input type="time" onChange={(e) => setAppointment(appointment => {return {...appointment, startTime: e.target.value }})}/>
            <input type="number" onChange={(e) => setAppointment(appointment => { return {...appointment, duration: e.target.value }})}/>
            <input type="text" placeholder="description" onChange={(e) => setAppointment(appointment => { return {...appointment, description: e.target.value }})}/>
            <button onClick={(e) => handleSubmit(e) }>Submit</button>
        </form>
    );

}

export default NewAppointmentForm;
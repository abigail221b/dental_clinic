import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateDentistForm = () => {

    const [dentist, setDentist] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/dentists/${ id }`)
        .then(res => res.json())
        .then(dentist => setDentist(dentist));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/dentists", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dentist)
        });
    }

    return (
        <form>
            <input type="text" value={dentist.firstName} onChange={(e) => setDentist(dentist => { return {...dentist, firstName: e.target.value }})} />
            <input type="text" value={dentist.lastName} onChange={(e) => setDentist(dentist => {return {...dentist, lastName: e.target.value }})}/>
            <input type="text" value={dentist.phoneNumber} onChange={(e) => setDentist(dentist => {return {...dentist, phoneNumber: e.target.value }})}/>
            <button onClick={ (e) => handleSubmit(e) }>Update</button>
        </form>
    );
}

export default UpdateDentistForm;
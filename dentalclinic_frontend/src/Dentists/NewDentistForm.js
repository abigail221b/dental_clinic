import { useState } from "react";

const NewDentistForm = () => {

    const [dentist, setDentist] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/dentists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dentist)
        });
    }

    return (
        <form>
            <input type="text" onChange={(e) => setDentist(dentist => { return {...dentist, firstName: e.target.value }})} />
            <input type="text" onChange={(e) => setDentist(dentist => {return {...dentist, lastName: e.target.value }})}/>
            <input type="text" onChange={(e) => setDentist(dentist => {return {...dentist, phoneNumber: e.target.value }})}/>
            <button onClick={ (e) => handleSubmit(e) }>Submit</button>
        </form>
    );
}

export default NewDentistForm;
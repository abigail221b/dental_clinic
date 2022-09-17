import { useEffect, useState } from "react";
import DentistRow from "./DentistRow";

const DentistList = () => {

    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentist")
        .then(res => res.json())
        .then(dentists => setDentists(dentists));
    }, []);

    return (
        <>
            { dentists.map(dentist => <DentistRow id={dentist.id} 
                                                  firstName={dentist.firstName}
                                                  lastName={dentist.lastName}
                                                  phoneNumber={dentist.phoneNumber} />)}
        </>
    );
}

export default DentistList;
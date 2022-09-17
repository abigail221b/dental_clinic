import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const DentistDetail = () => {

    const [dentist, setDentist] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/dentist/${ id }`)
        .then(res => res.json())
        .then(dentist => setDentist(dentist));
    }, []);

    return (
        <>
            <span>{dentist.id} {dentist.firstName} {dentist.lastName} {dentist.phoneNumber}</span>
            <Link to={{ pathname: `/dentist/update/${dentist.id}` }}>Edit</Link>
        </>
    );
}

export default DentistDetail;
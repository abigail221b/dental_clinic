import { Link } from "react-router-dom";

const DentistRow = ({id, firstName, lastName, phoneNumber}) => {
    return (
        <div>
            <span>{id} {firstName} {lastName} {phoneNumber}</span>
            <Link to={{ pathname: `/dentist/${id}` }}>View</Link>
            <Link to={{ pathname: `/dentist/${id}/update-form` }}>Edit</Link>
        </div>
    );
}

export default DentistRow;
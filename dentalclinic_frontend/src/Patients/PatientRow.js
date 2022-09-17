import { Link, Outlet } from "react-router-dom";

const PatientRow = ({ id, firstName, lastName, dateOfBirth, address, phoneNumber}) => {
    return (
        <div>
            <span>{id} {firstName} {lastName} {dateOfBirth} {address} {phoneNumber}</span>
            <Link to={{ pathname: `/patient/${ id }`}}> View </Link>
            <Link to={{ pathname: `/patient/update/${ id }`}}> Update </Link><br />
            <Outlet />
        </div>
    );
}

export default PatientRow;
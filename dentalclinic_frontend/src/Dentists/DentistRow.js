import { Link } from "react-router-dom";

const DentistRow = ({id, firstName, lastName, phoneNumber}) => {
    return (
        <div>
            <span>{id} {firstName} {lastName} {phoneNumber}</span>
        </div>
    );
}

export default DentistRow;
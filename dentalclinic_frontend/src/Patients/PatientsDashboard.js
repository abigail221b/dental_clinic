import { Link, Outlet } from "react-router-dom";

function PatientsDashboard() {
    return (
        <>
            <Link to="all">All Patients</Link>
            <Link to="new">New Patient</Link>
            <Link to="search">Search Patient</Link>
            <br />
            <Outlet />
        </>
    );
}

export default PatientsDashboard;
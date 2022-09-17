import { Routes, Route, Link, Outlet } from "react-router-dom";

const DentistDashboard = () => {
    return (
        <>
            <Link to="all">All Dentists</Link>
            <Link to="new">New Dentist</Link>
            <br />
            <Outlet />
        </>
    );
}

export default DentistDashboard;
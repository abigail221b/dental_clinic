import { Link, Outlet } from "react-router-dom";

const AppointmentDashboard = () => {
    return (
        <>
            <Link to="new">Add Appointment</Link>
            <Outlet />
        </>
    );
}

export default AppointmentDashboard;
import { Link, Outlet } from "react-router-dom";

function PatientsDashboard() {
    return (
        <>
            <Center>
                <Link to="all"><Center h="50px" w="115px"><Text as="u">All Patients</Text></Center></Link>
                <Link to="new"><Center h="50px" w="115px"><Text as="u">New Patient</Text></Center></Link>
                <Link to="search"><Center h="50px" w="115px"><Text as="u">Search Patients</Text></Center></Link>
            </Center>
            <br />
            <Outlet />
        </>
    );
}

export default PatientsDashboard;
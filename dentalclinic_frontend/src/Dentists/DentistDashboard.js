import { Link, Outlet } from "react-router-dom";
import { Center, Text, Container } from "@chakra-ui/react";

const DentistDashboard = () => {
    return (
        <div>
            <Center>
                <Link to="all"><Center h="50px" w="115px"><Text as="u">All Dentists</Text></Center></Link>
                <Link to="new"><Center h="50px" w="115px"><Text as="u">New Dentist</Text></Center></Link>
            </Center>
            <br />
        </div>
    );
}

export default DentistDashboard;
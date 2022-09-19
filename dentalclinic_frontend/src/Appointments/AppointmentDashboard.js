import { useState, useEffect } from "react";

const AppointmentDashboard = () => {

    const [date, setDate] = useState(new Date()
                                        .toLocaleDateString("en-CA", {
                                                        year: "numeric",
                                                        month: "numeric",
                                                        day: "numeric"
                                                    }));

    return (
        <>
            <input type="date" 
                   onChange={(e) => setDate(e.target.value) }
                   value={ date }/>
        </>
    );
}

export default AppointmentDashboard;
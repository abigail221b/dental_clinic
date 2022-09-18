package com.abigail221b.dentalclinic_backend.Appointment;

import lombok.Data;

@Data
public class AppointmentDTO {
    private AppointmentIDDTO id;
    private int dentistID;
    private int duration;
    private String description;
}

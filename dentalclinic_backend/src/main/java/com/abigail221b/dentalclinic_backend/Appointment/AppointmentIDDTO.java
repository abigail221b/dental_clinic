package com.abigail221b.dentalclinic_backend.Appointment;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Data;

@Data
public class AppointmentIDDTO {
    private int patientID;
    private LocalDate date;
    private LocalTime startTime;
}

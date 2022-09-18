package com.abigail221b.dentalclinic_backend.Appointment;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class AppointmentID implements Serializable {
    private int patientID;
    private LocalDate date;
    private LocalTime startTime;
}

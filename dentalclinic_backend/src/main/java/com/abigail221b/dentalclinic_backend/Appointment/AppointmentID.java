package com.abigail221b.dentalclinic_backend.Appointment;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.abigail221b.dentalclinic_backend.Patient.Patient;

import lombok.Data;

@Embeddable
@Data
public class AppointmentID implements Serializable {
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "patientID")
    private Patient patient;
    
    private LocalDate date;
    private LocalTime startTime;
}

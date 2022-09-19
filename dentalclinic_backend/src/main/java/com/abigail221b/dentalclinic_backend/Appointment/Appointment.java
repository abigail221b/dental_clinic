package com.abigail221b.dentalclinic_backend.Appointment;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.abigail221b.dentalclinic_backend.Dentist.Dentist;

import lombok.Data;

@Entity
@Data
public class Appointment {
    @EmbeddedId
    private AppointmentID id;

    @ManyToOne
    @JoinColumn(name = "dentistID")
    private Dentist dentist;
    private int duration;
    private String description;

}

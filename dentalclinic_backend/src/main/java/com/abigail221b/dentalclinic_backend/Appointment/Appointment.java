package com.abigail221b.dentalclinic_backend.Appointment;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import lombok.Data;

@Entity
@Data
public class Appointment {
    @EmbeddedId
    private AppointmentID id;

    private int dentistID;
    private int duration;
    private String description;

}

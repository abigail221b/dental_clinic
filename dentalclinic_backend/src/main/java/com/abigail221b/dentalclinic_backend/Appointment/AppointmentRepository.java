package com.abigail221b.dentalclinic_backend.Appointment;

import org.springframework.data.repository.CrudRepository;

public interface AppointmentRepository extends CrudRepository<Appointment, AppointmentID> {
    
}

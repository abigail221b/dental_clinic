package com.abigail221b.dentalclinic_backend.Appointment;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface AppointmentRepository extends CrudRepository<Appointment, AppointmentID> {
    public List<Appointment> findAllById_DateAndDentistId(LocalDate date, int dentistID);
    public List<Appointment> findAllById_PatientIdAndId_DateAfter(int patientID, LocalDate date);
}

package com.abigail221b.dentalclinic_backend.Patient;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient, Integer> {

    @Query(
        value = "SELECT * FROM patient p WHERE (:firstName is null OR p.first_name=:firstName) AND (:lastName is null OR p.last_name=:lastName) AND (:dateOfBirth is null OR p.date_of_birth=:dateOfBirth) AND (:phoneNumber is null OR p.phone_number=:phoneNumber)",
        nativeQuery = true
    )
    List<Patient> findBySearchParams(String firstName, String lastName, String dateOfBirth, String phoneNumber);
}

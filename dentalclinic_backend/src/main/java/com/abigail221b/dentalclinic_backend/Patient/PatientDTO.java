package com.abigail221b.dentalclinic_backend.Patient;

import java.time.LocalDate;

import lombok.Data;

@Data
public class PatientDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String address;
    private LocalDate dateOfBirth;
    private String phoneNumber;
}

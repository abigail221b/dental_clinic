package com.abigail221b.dentalclinic_backend.Patient;

import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/patients")
public class PatientController {
    
    @Autowired
    private PatientRepository patientRepository;
    
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<Iterable<Patient>> getAllPatients() {
        return new ResponseEntity<>(patientRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/")
    public ResponseEntity<List<Patient>> getPatientsBySearchParams(@RequestParam Map<String, String> searchParams) {
        
        List<Patient> patients = patientRepository.findBySearchParams(
                                                        searchParams.get("firstName"),
                                                        searchParams.get("lastName"),
                                                        searchParams.get("dateOfBirth"),
                                                        searchParams.get("phoneNumber")
                                                    );
        return new ResponseEntity<List<Patient>>(patients, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable(name = "id") int id) {
        Patient patient = patientRepository.findById(id).get();
        return new ResponseEntity<Patient>(patient, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Patient> addPatient(@RequestBody PatientDTO patientDTO) {
        Patient patient = modelMapper.map(patientDTO, Patient.class);
        patientRepository.save(patient);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<String> updatePatient(@RequestBody PatientDTO patientDTO) {
        Patient patient = modelMapper.map(patientDTO, Patient.class);
        patientRepository.save(patient);
        return new ResponseEntity<>("Patient updated", HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable(name = "id") int id) {
        patientRepository.deleteById(id);
        return new ResponseEntity<>("Patient deleted", HttpStatus.OK);
    }

}

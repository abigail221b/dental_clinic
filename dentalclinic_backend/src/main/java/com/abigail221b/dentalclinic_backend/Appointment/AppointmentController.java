package com.abigail221b.dentalclinic_backend.Appointment;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(path = "/appointment")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {
    
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<Iterable<Appointment>> getAllAppointments() {
        return new ResponseEntity<Iterable<Appointment>>(appointmentRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/")
    public ResponseEntity<List<Appointment>> getAppointmentsByDateAndDentistID(@RequestParam(name="date") String date, @RequestParam(name="dentistID") String dentistID) {
        LocalDate dateParam = LocalDate.parse(date);
        int dentistIDParam = Integer.parseInt(dentistID);
        return new ResponseEntity<List<Appointment>>(appointmentRepository.findAllById_DateAndDentistId(dateParam, dentistIDParam), HttpStatus.OK);
    }

    @RequestMapping(value = "/", params = {"patientID", "after"})
    public ResponseEntity<List<Appointment>> getAppointmentsByPatientIDAfterDate(@RequestParam(name="patientID") int patientID, @RequestParam(name="after") String date) {
        LocalDate dataParam = LocalDate.parse(date);
        return new ResponseEntity<List<Appointment>>(appointmentRepository.findAllById_PatientIdAndId_DateAfter(patientID, dataParam), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Appointment> addAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        System.out.println(appointmentDTO);
        Appointment appointment = modelMapper.map(appointmentDTO, Appointment.class);
        System.out.println(appointment);
        appointmentRepository.save(appointment);
        return new ResponseEntity<Appointment>(appointment, HttpStatus.OK);
    }

}

package com.abigail221b.dentalclinic_backend.Dentist;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/dentist")
public class DentistController {

    @Autowired
    private DentistRepository dentistRepository;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<Iterable<Dentist>> getAllDentists() {
        return new ResponseEntity<Iterable<Dentist>>(dentistRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Dentist> getDentistById(@PathVariable(name="id") int id) {
        Dentist dentist = dentistRepository.findById(id).get();
        return new ResponseEntity<Dentist>(dentist, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Dentist> addDentist(@RequestBody DentistDTO dentistDTO) {
        Dentist dentist = modelMapper.map(dentistDTO, Dentist.class);
        dentistRepository.save(dentist);
        return new ResponseEntity<Dentist>(dentist, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Dentist> updateDentist(@RequestBody DentistDTO dentistDTO) {
        Dentist dentist = modelMapper.map(dentistDTO, Dentist.class);
        dentistRepository.save(dentist);
        return new ResponseEntity<Dentist>(dentist, HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteDentist(@PathVariable(name="id") int id) {
        dentistRepository.deleteById(id);
        return new ResponseEntity<String>("Dentist Deleted", HttpStatus.OK);
    }

}

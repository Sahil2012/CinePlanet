package com.example.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookingservice.dto.TheaterDTO;
import com.example.bookingservice.service.TheaterService;

@RestController
@RequestMapping("/theater")
public class TheaterController {
    
    @Autowired
    private TheaterService theaterService;

    @PostMapping
    public ResponseEntity<?> createTheater(@RequestBody TheaterDTO theaterDTO) {
        return theaterService.createTheater(theaterDTO);
    }

    @GetMapping
    public List<TheaterDTO> getAllTheater() {
        return theaterService.getAllTheater();
    }
}

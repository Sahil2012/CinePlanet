package com.example.bookingservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bookingservice.domain.Screen;
import com.example.bookingservice.domain.Seat;
import com.example.bookingservice.domain.Theater;
import com.example.bookingservice.dto.TheaterDTO;
import com.example.bookingservice.repository.TheaterRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TheaterService {

    @Autowired
    private TheaterRepository theaterRepository;

    @Autowired
    private ModelMapper mapper;

    public ResponseEntity<?> createTheater(TheaterDTO theaterDTO) {
        System.out.println(theaterDTO);
        Theater theater = mapper.map(theaterDTO, Theater.class);

        // For each Screen, set the relationship with the theater
        for (Screen screen : theater.getScreens()) {
            screen.setTheater(theater);
            for (Seat seat : screen.getSeats()) {
                seat.setScreen(screen);
            }
        }

        theaterRepository.save(theater);

        return ResponseEntity.accepted().build();
    }

    public List<TheaterDTO> getAllTheater() {

        return theaterRepository.findAll()
                .stream()
                .map(m -> mapper.map(m, TheaterDTO.class))
                .collect(Collectors.toList());
    }

    public Theater getTheaterById(long theaterId) {
        return theaterRepository.findById(theaterId).orElseThrow(() -> new EntityNotFoundException("No Theater found"));
    }

}

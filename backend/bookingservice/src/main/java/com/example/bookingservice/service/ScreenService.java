package com.example.bookingservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bookingservice.domain.Screen;
import com.example.bookingservice.domain.Seat;
import com.example.bookingservice.domain.Theater;
import com.example.bookingservice.dto.ScreenDTO;
import com.example.bookingservice.repository.ScreenRepository;

@Service
public class ScreenService {

    @Autowired
    private ScreenRepository screenRepository;

    @Autowired
    private TheaterService theaterService;

    @Autowired
    private ModelMapper mapper;

    public ResponseEntity<?> createScreen(int theaterId, ScreenDTO screenDTO) {

        Theater theater = theaterService.getTheaterById(theaterId);
        Screen screen = mapper.map(screenDTO, Screen.class);
        screen.setTheater(theater);

        for(Seat seat : screen.getSeats()) {
            seat.setScreen(screen);
        }

        screenRepository.save(screen);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public List<ScreenDTO> getScreensByTheaterId(int theaterId) {
        
        return screenRepository.findScreensByTheaterId(theaterId)
                .stream()
                .map(m -> mapper.map(m, ScreenDTO.class))
                .collect(Collectors.toList());
    }

}

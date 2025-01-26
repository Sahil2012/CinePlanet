package com.example.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookingservice.dto.ScreenDTO;
import com.example.bookingservice.service.ScreenService;


@RestController
@RequestMapping("/screens")
public class ScreenController {
    
    @Autowired
    private ScreenService screenService;

    @GetMapping("/{theaterId}")
    public List<ScreenDTO> getScreensByTheaterId(@PathVariable int theaterId) {
        return screenService.getScreensByTheaterId(theaterId);
    }

    @PostMapping("/{theaterId}")
    public ResponseEntity<?> createScreen(@PathVariable int theaterId,@RequestBody ScreenDTO screenDTO) {
        return screenService.createScreen(theaterId,screenDTO);
    }
}

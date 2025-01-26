package com.example.bookingservice.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TheaterDTO {
    private String name;
    private String address;
    private List<ScreenDTO> screens;
}

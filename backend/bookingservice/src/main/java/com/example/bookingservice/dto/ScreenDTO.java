package com.example.bookingservice.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScreenDTO {

    private String name;

    private Integer totalRows;

    private Integer totalColumns;

    private List<SeatDTO> seats;

}

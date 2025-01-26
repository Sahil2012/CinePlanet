package com.example.bookingservice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieDTO {
    private String title;
    private String genre;
    private Integer durationInMinutes;
    private String language;
    private String posterUrl;
}

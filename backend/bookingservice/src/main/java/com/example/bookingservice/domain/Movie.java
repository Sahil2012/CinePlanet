package com.example.bookingservice.domain;

import com.example.bookingservice.domain.enums.Rating;
import com.example.bookingservice.domain.enums.Genre;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer movieId;
    
    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private String discription;
    @Column(nullable = false)
    private String starring;

    @Enumerated(EnumType.STRING)
    private Rating rating;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    
    public Movie() {
    }

    public Movie(Integer movieId, String name, String discription, String starring,
            Rating rating, Genre genre) {
        this.movieId = movieId;
        this.name = name;
        this.discription = discription;
        this.starring = starring;
        this.rating = rating;
        this.genre = genre;
    }
    public Integer getMovieId() {
        return movieId;
    }
    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDiscription() {
        return discription;
    }
    public void setDiscription(String discription) {
        this.discription = discription;
    }
    public String getStarring() {
        return starring;
    }
    public void setStarring(String starring) {
        this.starring = starring;
    }
    public Rating getRating() {
        return rating;
    }
    public void setRating(Rating rating) {
        this.rating = rating;
    }
    public Genre getGenre() {
        return genre;
    }
    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    
}

package com.example.bookingservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bookingservice.domain.Movie;
import com.example.bookingservice.dto.MovieDTO;
import com.example.bookingservice.repository.MovieRepository;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ModelMapper mapper;

    public List<MovieDTO> getAllMovies() {

        return movieRepository.findAll()
                .stream()
                .map(m -> mapper.map(m, MovieDTO.class))
                .collect(Collectors.toList());
    }

    public MovieDTO getMovieById(long movieId) {

        Movie movie = movieRepository.findById(movieId).get();

        if (movie != null) {
            MovieDTO movieDTO = mapper.map(movie, MovieDTO.class);
            return movieDTO;
        }

        return null;
    }

    public ResponseEntity<?> createMovie(MovieDTO movieDTO) {

        Movie movie = mapper.map(movieDTO, Movie.class);
        movieRepository.save(movie);

        return ResponseEntity.accepted().build();
    }

}

package com.example.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookingservice.domain.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

    
}

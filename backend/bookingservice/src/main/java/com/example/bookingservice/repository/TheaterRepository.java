package com.example.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookingservice.domain.Theater;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Long> {
    
}

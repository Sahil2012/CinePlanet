package com.example.bookingservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.bookingservice.domain.Screen;

@Repository
public interface ScreenRepository extends JpaRepository<Screen, Long> {

    @Query("SELECT s FROM Screen s WHERE s.theater.id = :theaterId")
    List<Screen> findScreensByTheaterId(@Param("theaterId") int theaterId);
}

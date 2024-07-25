package com.example.bookingservice.domain;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "theater")
public class Theater {
    
    @Id
    private Integer id;

    @Column(nullable = false, unique = true)
    private String name;
    @Column(nullable = false)
    private String address;

    @OneToMany(mappedBy = "theater", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Ticket> ticket;

    public Theater() {
    }

    public Theater(Integer id, String name, String address, List<Ticket> ticket) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.ticket = ticket;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Ticket> getTicket() {
        return ticket;
    }

    public void setTicket(List<Ticket> ticket) {
        this.ticket = ticket;
    }

    
}

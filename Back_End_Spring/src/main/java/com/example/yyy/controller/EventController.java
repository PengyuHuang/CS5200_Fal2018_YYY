package com.example.yyy.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;

@RestController
@CrossOrigin(origins = "*")
public class EventController {
  @Autowired
  EventRepository eventRepository;


  @PostMapping("/api/event/create")
  public Event createEvent(@RequestBody Event event) {
    eventRepository.save(event);
    return event;
  }

  @GetMapping("/api/event/read/all")
  public List<Event> findAllEvents() {
    return eventRepository.findAll();
  }

  @GetMapping("/api/event/read/{eventId}")
  public Event findEvent(@PathVariable("eventId") int id) {
    return eventRepository.findById(id).get();
  }

  @PutMapping("/api/event/update/{eventId}")
  public Event updateEvent(
          @PathVariable("eventId") int id,
          @RequestBody Event newEvent) {
    Event event = eventRepository.findById(id).get();
    event.set(newEvent);
    return eventRepository.save(event);
  }

  @DeleteMapping("/api/event/delete/{eventId}")
  public void deleteEvent
          (@PathVariable("eventId") int id) {
    eventRepository.deleteById(id);
  }












}

package com.example.yyy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Event {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int id;
  private String name;
  private String description;
  private String location;
  private String date;
  private String game;
  private int priority;

  @ManyToOne
  @JsonIgnore
 private User host;
  private String host_name;

  /*
  @OneToMany(mappedBy = "event", fetch = FetchType.EAGER)
  private Set<Enrollment> enrollments;

  */

  @ManyToMany(mappedBy = "events_joined")
  @JsonIgnore
  private List<User> attendants;


  public Event(){}

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public String getHost_name() {
    return host_name;
  }

  public void setHost_name(String host_name) {
    this.host_name = host_name;
  }

  public int getPriority() {
    return priority;
  }

  public void setPriority(int priority) {
    this.priority = priority;
  }

  public List<User> getAttendants() {
    return attendants;
  }

  public void setAttendants(List<User> attendants) {
    this.attendants = attendants;
  }

  public User getHost() {
    return host;
  }

  public void setHost(User host) {
    this.host = host;
  }

  public void set(Event event){
    this.name=event.name;
    this.description=event.description;
    this.location=event.location;
    this.date=event.date;
  }

  public void enrollUser(User user) {
    this.attendants.add(user);
    if (!user.getEvents_joined().contains(this)) {
      user.getEvents_joined().add(this);
    }
  }

  public String getGame() {
    return game;
  }

  public void setGame(String game) {
    this.game = game;
  }
}

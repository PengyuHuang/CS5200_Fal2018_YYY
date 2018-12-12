package com.example.yyy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class User {


  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int id;
  private String username;
  private String password;
  private String email;
  private String type;

  @OneToMany(mappedBy = "author", orphanRemoval = true ,cascade = CascadeType.REMOVE)
  private List<Post> posts;

  @OneToMany(mappedBy= "host", orphanRemoval = true ,cascade = CascadeType.REMOVE)
  private List<Event> events_created;

  @ManyToMany
  @JoinTable(name="enrollment",
          joinColumns=@JoinColumn(name="user_id",
                  referencedColumnName="id"),
          inverseJoinColumns=@JoinColumn(name=
                  "event_id", referencedColumnName="id"))
  private List<Event> events_joined;



@OneToMany(mappedBy ="advertiser" , orphanRemoval = true ,cascade = CascadeType.REMOVE)
private List<Advertisement> advertisements;



  // @JsonIgnore
  public User(){}


  public User(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<Post> getPosts() {
    return posts;
  }
  public void setPosts(List<Post> posts) {
    this.posts = posts;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public void set(User user){
    this.username=user.username;
    this.password=user.password;
    this.email=user.email;
  }

  public List<Event> getEvents_created() {
    return events_created;
  }

  public void setEvents_created(List<Event> events_created) {
    this.events_created = events_created;
  }

  public List<Event> getEvents_joined() {
    return events_joined;
  }

  public void setEvents_joined(List<Event> events_joined) {
    this.events_joined = events_joined;
  }


  public void joinEvent(Event event) {
    this.events_joined.add(event);
    if (!event.getAttendants().contains(this)) {
      event.getAttendants().add(this);
    }
  }


  public void quitEvent(Event event){
    this.events_joined.remove(event);
    if (event.getAttendants().contains(this)) {
      event.getAttendants().remove(this);
    }
  }

  public void hostEvent(Event event)
  {
    this.events_created.add(event);
    if (event.getHost()!=this)
    {
      event.setHost(this);
    }
  }
  public void postPost(Post post)
  {
    this.posts.add(post);
    if (post.getAuthor()!=this)
    {
      post.setAuthor(this);
    }
  }

  public void postAd(Advertisement advertisement){
    this.advertisements.add(advertisement);
    if(advertisement.getAdvertiser()!=this)
    {
      advertisement.setAdvertiser(this);
    }
  }


  public List<Advertisement> getAdvertisements() {
    return advertisements;
  }

  public void setAdvertisements(List<Advertisement> advertisements) {
    this.advertisements = advertisements;
  }
}

package com.example.yyy.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

  @Autowired
  UserRepository userRepository;
  @Autowired
  EventRepository eventRepository;
  @Autowired
PostRepository postRepository;
  @Autowired
  AdvertisementRepository advertisementRepository;


  @PostMapping("/api/user/create")
  public User createUser(@RequestBody User user) {
    userRepository.save(user);
    return user;
  }

  @GetMapping("/api/user/read/all")
  public List<User> findAllUsers() {
    return userRepository.findAll();
  }

  @GetMapping("/api/user/read/{userId}")
  public User findUser(@PathVariable("userId") int id) {
    return userRepository.findById(id).get();
  }

  @PutMapping("/api/user/update/{userId}")
  public User updateUser(
          @PathVariable("userId") int id,
          @RequestBody User newUser) {
    User user = userRepository.findById(id).get();
    user.set(newUser);
    return userRepository.save(user);
  }

  @DeleteMapping("/api/user/delete/{userId}")
  public void deleteUser(@PathVariable("userId") int id) {
    userRepository.deleteById(id);
  }


  @GetMapping("/api/findUserByUsername/{username}")
  public List<User> findUserByUsername(@PathVariable ("username") String username){
    return  userRepository.findUserByUsername(username);

  }
  @GetMapping("/api/findUserByCredentials/{username}/{password}")
  public List<User> findUserByCredentials
          (@PathVariable ("username") String username,
           @PathVariable ("password") String password){
    return  userRepository.findUserByCredentials(username,password);
  }


@PutMapping("api/user/joinEvent/{userId}/{eventId}")
public void joinEvent (@PathVariable ("userId") int userId,
                       @PathVariable ("eventId") int eventId)

{
  Optional<Event> event=eventRepository.findById(eventId);
  Optional<User> user=userRepository.findById(userId);
  if(event.isPresent() && user.isPresent())
  {
  user.get().joinEvent(event.get());
  userRepository.save(user.get());
  eventRepository.save(event.get());
}
}

  @PutMapping("api/user/quitEvent/{userId}/{eventId}")
  public void quitEvent (@PathVariable ("userId") int userId, @PathVariable ("eventId") int eventId)
  {
    Optional<Event> event=eventRepository.findById(eventId);
    Optional<User> user=userRepository.findById(userId);
    if(event.isPresent() && user.isPresent())
    {
      user.get().quitEvent(event.get());
      userRepository.save(user.get());
      eventRepository.save(event.get());
    }
  }

@GetMapping("api/user/findJoinedEvents/{userId}")
  public List<Event> findJoinedEvents(@PathVariable ("userId") int userId){
  Optional<User> user=userRepository.findById(userId);
  return user.map(User::getEvents_joined).orElse(null);
}

  @GetMapping("api/user/findNotJoinedEvents/{userId}")
  public List<Event> findNotJoinedEvents(@PathVariable ("userId") int userId){
    User user= userRepository.findById(userId).isPresent()?
            userRepository.findById(userId).get():null;
    List<Event> eventsAll=eventRepository.findAll();
    List<Event> res=new LinkedList<>();
    for(Event event:eventsAll)
    {
      if(!event.getAttendants().contains(user))
      {
        res.add(event);
      }
    }
    return  res;
  }

  @PutMapping("api/user/hostEvent/{userId}")
  public void setHostForEvent( @PathVariable("userId") int userId,
                               @RequestBody Event event)
  {
    User user= userRepository.findById(userId).isPresent()?
            userRepository.findById(userId).get():null;
    user.hostEvent(event);
    userRepository.save(user);
    eventRepository.save(event);
  }

  @PutMapping("api/user/postPost/{userId}")
  public void setAuthorForPost( @PathVariable("userId") int userId,
                               @RequestBody Post post)
  {
    User user= userRepository.findById(userId).isPresent()?
            userRepository.findById(userId).get():null;
    user.postPost(post);
    userRepository.save(user);
    postRepository.save(post);
  }

  @GetMapping("api/user/findAuthoredPosts/{userId}")
  public List<Post> findAuthoredPosts(@PathVariable ("userId") int userId){
    Optional<User> user=userRepository.findById(userId);
    return user.map(User::getPosts).orElse(null);
  }

  @GetMapping("api/user/findHostedEvents/{userId}")
  public List<Event> findHostedEvents(@PathVariable ("userId") int userId){
    Optional<User> user=userRepository.findById(userId);
    return user.map(User::getEvents_created).orElse(null);
  }
  @GetMapping("api/user/findNotJoinedEventsNotVIP/{userId}")
  public List<Event> findNotJoinedEventsNotVIP(@PathVariable ("userId") int userId){
    User user= userRepository.findById(userId).isPresent()?
            userRepository.findById(userId).get():null;
    List<Event> eventsAll=eventRepository.findAll();
    List<Event> res=new LinkedList<>();
    for(Event event:eventsAll)
    {
      if(!event.getAttendants().contains(user) && event.getPriority()==0)
      {
        res.add(event);
      }
    }
    return  res;
  }

  @PutMapping("api/user/postPost/{userId}/{postId}")
  public void setAuthorForPostReply( @PathVariable("userId") int userId,
                                     @PathVariable("postId") int postId,
                                @RequestBody Post reply)
  {
    User user= userRepository.findById(userId).isPresent()?
            userRepository.findById(userId).get():null;

    Post parent= postRepository.findById(postId).isPresent()?
            postRepository.findById(postId).get():null;

    user.postPost(reply);
    parent.addAnReply(reply);
    userRepository.save(user);
    postRepository.save(parent);
    postRepository.save(reply);
  }

  @GetMapping("api/user/findUserByPostId/{postId}")
public User findUserByPostId(@PathVariable("postId") int postId)
{
  Post post= postRepository.findById(postId).isPresent()?
          postRepository.findById(postId).get():null;
  return post.getAuthor();
}

  @GetMapping("api/user/findHostByEventId/{eventId}")
  public User findHostByEventId(@PathVariable("eventId") int eventId)
  {
    Event event =eventRepository.findById(eventId).isPresent()?
            eventRepository.findById(eventId).get():null;
    return event.getHost();
  }


  @GetMapping("api/user/findUsersByEventId/{eventId}")
  public List<User> findUsersByEventId(@PathVariable("eventId") int eventId)
  {
    Event event =eventRepository.findById(eventId).isPresent()?
            eventRepository.findById(eventId).get():null;
    return event.getAttendants();
  }


  @PutMapping("api/user/postAd/{userId}")
  public void setUserForAdv( @PathVariable("userId") int userId,
                                @RequestBody Advertisement advertisement)
  {
    User user= userRepository.findById(userId).isPresent()?
            userRepository.findById(userId).get():null;
    user.postAd(advertisement);
    userRepository.save(user);
  advertisementRepository.save(advertisement);
  }


  @GetMapping("api/user/findAuthoredAds/{userId}")
  public List<Advertisement> findAuthoredAds(@PathVariable ("userId") int userId){
    Optional<User> user=userRepository.findById(userId);
    return user.map(User::getAdvertisements).orElse(null);
  }



}









package com.example.yyy.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer>{
  @Query("SELECT user FROM User user WHERE user.username=:username")
          public List<User> findUserByUsername
          (@Param("username") String username);

  @Query("SELECT user from User user WHERE user.username=:username AND  user.password=:password")
          public List<User> findUserByCredentials
          (@Param("username") String username,
          @Param("password") String password);

/*
  @Query("SELECT post from Post post WHERE post.username=:username ")
  public List<Post> findPostByUsername
          (@Param("username") String username); */


}

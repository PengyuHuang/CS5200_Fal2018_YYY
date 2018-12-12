package com.example.yyy.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;


public interface GameRepository extends JpaRepository<Game, Integer> {



 @Query(" SELECT game from Game game  ORDER BY score_rank DESC ")
  public List<Game> findGameScore_rank();

 @Query(" SELECT game from Game game  WHERE game.name LIKE CONCAT('%',:name,'%')")
 public List<Game>  findGamesByNameSearch(@Param("name") String name);
/*
 @Query(" SELECT game from Game game  order by Random()")
 public List<Game>  findGamesByRandom(); */

}
//Caused by: com.mysql.cj.jdbc.exceptions.MysqlDataTruncation: Data truncation: Data too long for column 'name' at row 1
package com.example.yyy.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.Random;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;


@RestController
@CrossOrigin(origins = "*")
public class GameController {

  @Autowired
  GameRepository gameRepository;

  /*
  @RequestMapping("/{name}")
  public Game insertGame(@PathVariable ("name") String name){
    Game game=new Game(name);
    gameRepository.save(game);
    return game;
  } */

  @GetMapping("/api/game/read/all")
  public List<Game> selectGames() {
    List<Game> games = (List<Game>) gameRepository.findAll();
    return games;
  }

  @GetMapping("/api/game/read/score_rank")
  public List<Game> findGamesScoreRank() {
    if (gameRepository.findAll().size() == 0) {
      return gameRepository.findAll();
    }

    return (gameRepository.findGameScore_rank()).subList(0, 20);
  }

  @GetMapping("/api/game/read/search/{name}")
  public List<Game> findGamesByNameSearch(@PathVariable("name") String name) {
    return (gameRepository.findGamesByNameSearch(name));
  }


  @GetMapping("/api/game/read/random")
  public List<Game> findGamesByRandom() {
    if (gameRepository.findAll().size() == 0) {
      return gameRepository.findAll();
    }
    List<Game> list = gameRepository.findAll();
    List<Game> res = new LinkedList<>();
    for (int i = 0; i < 20; i++) {
      Random rand = new Random();
      res.add(list.get(rand.nextInt(list.size())));
    }
    return res;


  }

}
